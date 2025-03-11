'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation'

// https://chatgpt.com/share/67b55454-75dc-8011-b040-0593b54c78f7
export default function End() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
          router.push("/fen/narrative"); 
        }, 1500);
    
        return () => clearTimeout(timer); 
      }, []);

      
  return (
    <>
      <div className="w-screen h-screen fixed z-20 flex flex-col justify-center items-center template_box gap-[40px]">
      <p className="subhead p-5 text-3xl">Welcome to Enigma...</p>
      </div>

      {/* bg */}
      <div className="w-screen h-screen gradient fixed z-10"></div>
    </>
  )
}
