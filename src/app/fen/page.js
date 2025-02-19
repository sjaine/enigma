"use client"

import "../globals.css";
import Image from 'next/image'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      {/* Background Image */}
      <Image className="z-0 object-cover" src="/bc.png" alt="background" fill />

      {/* Buttons */}
      <div className="z-10 relative flex justify-center items-center flex-col gap-7">
        <p className="text-xl text-darkerGreen subhead font-semibold">Welcome to...</p>
        <p className="text-8xl logo text-light drop-shadow-lg">ENIGMA</p>
        <button onClick={() => router.push('/narrative')} className="text-xl drop-shadow-lg logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Start</button>
      </div>
    </div>
  )
}