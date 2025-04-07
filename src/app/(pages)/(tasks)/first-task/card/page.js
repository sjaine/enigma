// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
"use client";

// MapBox GL API integration - https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { useRouter } from 'next/navigation'

import 'mapbox-gl/dist/mapbox-gl.css';


function Map() {
    const [step, setStep] = useState(1);
    const router = useRouter()

    const mapRef = useRef()
    const mapContainerRef = useRef()
    const userLocationRef = useRef(null);
    const geolocateControlRef = useRef(null);

    const destinationCoordinates = [-79.6988871657093, 43.4686279785684]; // [longitude, latitude]
  
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/sjaine/cm6s0pv9c000v01s1hjtkczzf',  // Custom style URL
      center: destinationCoordinates,  // Initial coordinates (longitude, latitude)
      zoom: 18  // Initial zoom level
    });

    // current location - https://docs.mapbox.com/mapbox-gl-js/example/locate-user/
    // Track user location
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
      fitBoundsOptions: { maxZoom: 18 }
    });

    geolocateControlRef.current = geolocateControl;

    // Add Geolocation tracking manually (no default UI)
    mapRef.current.addControl(geolocateControl, "top-right");
    
    // Once the user location is obtained, set state
    geolocateControl.on('geolocate', (e) => {
      const { longitude, latitude } = e.coords;
      const location = [longitude, latitude];
      userLocationRef.current = location;
    });

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
          getRoute(userLocationRef.current) // Call your route function here
        });
      });

    return () => {
      mapRef.current.remove()
    };
  }, [])

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

      // Custom function to trigger geolocation
  const handleLocateUser = () => {
    if (geolocateControlRef.current) {
      geolocateControlRef.current.trigger(); // Manually trigger location detection
    }
  };

  return (
    <>
      <div 
        id="map-container" 
        ref={mapContainerRef} 
        style={{ width: '100vw', height: '100vh' }} // Ensure map has a full screen height
      />

      <div className="fixed bg-light card text-brown border-2 border-brown rounded-3xl flex justify-center items-center flex-col p-5 gap-[30px]">
        {step === 1 && (
            // Question
            <>
            <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
                <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">?</div>
                <p>What am I?</p>
            </div>

            <div className="flex gap-[20px] flex-col subhead text-lg">
                <p>Fen left me with the first task to complete—but there’s a riddle, a tricky one at that:</p>
                <p>“I hold many worlds yet never leave my place. Pages turn within me, but I never show my face. What am I?” </p>
                <p>Can you make sense of it? </p>
            </div>
            <button onClick={() => setStep(2)} className="bg-redLight border-2 border-brown text-light font-bold py-2 px-4 mt-4 rounded-full logo text-xl">
                Choose the answer
            </button>
            </>
        )}

        {step === 2 && (
            // Choice
            <>
            <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
                <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">?</div>
                <p>What am I?</p>
            </div>

            <div className="block w-full flex flex-col gap-[15px]">
                {["The Cafeteria", "The Library", "The Bookstore", "J222"].map(
                (option, index) => (
                    <button
                    key={index}
                    className="block w-full border-2 border-brown text-brown logo text-xl font-bold py-2 px-4 rounded-full mt-2"
                    onClick={() => setStep(option === "The Library" ? 4 : 3)} 
                    >
                    {option}
                    </button>
                )
                )}  
            </div>
            </>
        )}

        {step === 3 && (
            // Wrong!
            <>
            <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
                <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">?</div>
                <p>Try Again!</p>
            </div>

            <p className="text-xl text-brown mt-3 subhead">
            “I hold many worlds yet never leave my place. Pages turn within me, but I never show my face. What am I?”
            </p>

            <button
                onClick={() => setStep(2)}
                className="bg-redLight border-2 border-brown text-light font-bold py-2 px-4 mt-4 rounded-full logo text-xl"
            >
                Go Back!
            </button>
            </>
        )}

        {step === 4 && (
            // Quest
            <>
            <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
                <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">!</div>
                <p>New Quest!</p>
            </div>

            <div>
                <img src="/library.jpg" alt="library" className="questImg mb-5" />
                <p className="text-xl text-brown mt-2 subhead">📍 Location: Library</p>
                <p className="text-xl text-brown mt-3 subhead">📝 Task: Head to the Library. There, seek the next task.</p>
            </div>
            
            <button
                onClick={() => router.push('/first-task/map')}
                className="bg-redLight border-2 border-brown text-light font-bold py-2 px-4 mt-4 rounded-full logo text-xl"
            >
                Get Directions
            </button>
            </>
        )}
      </div>
    </>
  )
}

export default Map;
