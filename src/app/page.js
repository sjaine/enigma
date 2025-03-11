"use client"

import "./globals.css";
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
        <button onClick={() => router.push('/intro')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Intro</button>
        <button onClick={() => router.push('/fen/introduction')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Fen</button>
        <button onClick={() => router.push('/orion/introduction')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Orion</button>

        <button onClick={() => router.push('/first-task')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">First task</button>
        <button onClick={() => router.push('/second-task')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Second task</button>
        <button onClick={() => router.push('/second-task/completed')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Second task - Completed</button>
        <button onClick={() => router.push('/third-task')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Third task</button>
        <button onClick={() => router.push('/fourth-task')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Fourth task</button>

        <button onClick={() => router.push('/forest/wrong')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Wrong Forest</button>
        <button onClick={() => router.push('/forest/right')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Right Forest</button>

        <button onClick={() => router.push('/trust/fen')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Trust Fen</button>
        <button onClick={() => router.push('/trust/orion')} className="text-xl logo text-darkerGreen rounded-full bg-lightyellow px-8 py-0.5">Trust Orion</button>

      </div>
    </div>
  )
}