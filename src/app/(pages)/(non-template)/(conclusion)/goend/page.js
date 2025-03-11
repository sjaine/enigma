'use client'

import { useRouter } from 'next/navigation'

// https://chatgpt.com/share/67b55454-75dc-8011-b040-0593b54c78f7
export default function End() {
  const router = useRouter();

  return (
    <>
      <div className="w-screen h-screen fixed z-20 flex flex-col justify-center items-center template_box gap-[10px]">
        <p className="subhead text-3xl text-center p-12">Your mission is complete. Head back inside to discover the fate of your world....</p>

        <button className="border-2 border-neutral-50 text-neutral-50 subhead text-xl font-bold py-2 px-8 rounded-full m-3 cursor-pointer p-4" onClick={() => router.push("/conclusion")}>
        Go to the ending...
        </button>
      </div>

      {/* bg */}
      <div className="w-screen h-screen gradient fixed z-10"></div>
    </>
  )
}
