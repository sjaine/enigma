// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
"use client";

// MapBox GL API integration - https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';


function Map() {
  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/sjaine/cm6s0pv9c000v01s1hjtkczzf',  // Custom style URL
      center: [-79.700070, 43.468795],  // Initial coordinates (longitude, latitude)
      zoom: 17  // Initial zoom level
    });

    // current location - https://docs.mapbox.com/mapbox-gl-js/example/locate-user/
    // Add geolocate control to the map.
    mapRef.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      })
    );

    return () => {
      mapRef.current.remove()
    }
    
  }, [])

  return (
    <>
      <div 
        id="map-container" 
        ref={mapContainerRef} 
        style={{ width: '100%', height: '100vh' }} // Ensure map has a full screen height
      />
    </>
  )
}

export default Map;
