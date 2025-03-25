// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
"use client";

// MapBox GL API integration - https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
import { useRouter } from 'next/navigation'

function Map() {
    const router = useRouter()

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-no-repeat fixed z-0"
        style={{ backgroundImage: `url('/bc-p.png')` }}
      ></div>

      <div className="fixed bg-light card text-brown border-2 border-brown rounded-3xl flex justify-center items-center flex-col p-5 gap-[30px]">
          <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
              <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">!</div>
              <p>New Quest!</p>
          </div>

          <div>
              <img src="/task-p.png" alt="pink hallway" className="questImg mb-5" />
              <p className="text-xl text-brown mt-2 subhead">📍 Location: Pink Hallway</p>
              <p className="text-xl text-brown mt-3 subhead">📝 Task: Find an illustration with this symbol. Then, scan through the website.</p>
          </div>
          
          <button
              onClick={() => window.location.href = 'https://enigma-arfilter.netlify.app/'}
              className="bg-redLight border-2 border-brown text-light font-bold py-2 px-4 mt-4 rounded-full logo text-xl"
          >
              Scan QR Code
          </button>
      </div>
    </>
  )
}

export default Map;
