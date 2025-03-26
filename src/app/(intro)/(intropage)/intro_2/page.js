'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation'

import Image from 'next/image'

// https://chatgpt.com/share/67b55454-75dc-8011-b040-0593b54c78f7
export default function End() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
          router.push("/fen/narrative"); 
        }, 2000);
    
        return () => clearTimeout(timer); 
      }, []);

      
  return (
    <>
      <div className="w-screen h-screen fixed z-20 flex flex-col justify-center items-center template_box gap-[40px] bg-[url(/orion/orion-bc.png)] bg-cover ">
        <Image 
            src="/enigmalogo.png"
            alt="Enigma Logo"
            width="300"
            height="250"
        /> 
      </div>
    </>
  )
}
