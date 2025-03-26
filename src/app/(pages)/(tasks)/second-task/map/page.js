"use client"

import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRouter } from 'next/navigation'

function Map() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const userLocationRef = useRef(null);
  const geolocateControlRef = useRef(null);
  const router = useRouter()

  const destinationCoordinates = [-79.6986865957049, 43.4684768691731]; // [longitude, latitude]

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/sjaine/cm6s0pv9c000v01s1hjtkczzf', // Custom style URL
      center: destinationCoordinates, // Initial coordinates
      zoom: 18, // Initial zoom level
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          userLocationRef.current = [longitude, latitude];

          getRoute(userLocationRef.current);
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Location access denied. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }

    // Geolocation Control (auto-start navigation)
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
      fitBoundsOptions: { maxZoom: 18 },
    });

    geolocateControlRef.current = geolocateControl;
    mapRef.current.addControl(geolocateControl, 'top-right');

    // When the user's location is detected, start navigation
    geolocateControl.on('geolocate', (e) => {
      const { longitude, latitude } = e.coords;
      const location = [longitude, latitude];
      userLocationRef.current = location;

      // Auto-start route navigation once location is available
      getRoute(location);
    });

    // Trigger location fetch immediately
    geolocateControl.trigger();

    // Add Marker for Destination
    const marker = new mapboxgl.Marker({ color: '#dd7c7b' })
      .setLngLat(destinationCoordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <h3>CN Tower</h3>
          <button id="route-btn">Get Directions Here</button>
        `)
      )
      .addTo(mapRef.current);

    marker.getPopup().on('open', () => {
      document.getElementById('route-btn').addEventListener('click', () => {
        getRoute(userLocationRef.current);
      });
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  // Fetch & Draw Route
  const getRoute = async (currentLocation) => {
    if (!currentLocation) {
      alert('Waiting for your location...');
      return;
    }

    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/walking/${currentLocation[0]},${currentLocation[1]};${destinationCoordinates[0]},${destinationCoordinates[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
    );

    const data = await query.json();
    const route = data.routes[0].geometry;

    // Draw the route line on the map
    if (mapRef.current.getSource('route')) {
      mapRef.current.getSource('route').setData({
        type: 'Feature',
        properties: {},
        geometry: route,
      });
    } else {
      mapRef.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: route,
        },
      });

      mapRef.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': '#dd7c7b', 'line-width': 5 },
      });
    }
  };

  return (
    <>
      <div
        id="map-container"
        ref={mapContainerRef}
        style={{ width: '100%', height: '100vh' }} // Full screen height
      />

      <button
        className="absolute border-2 border-brown text-brown logo text-xl font-bold py-2 px-8 rounded-full m-3 bg-light cursor-pointer bottom-[20vh] p-4"
        onClick={() => router.push('/second-task/pink-hallway')}
      >
        Are you there?
      </button>
    </>
  );
}

export default Map;
