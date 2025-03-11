'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation'

import Image from 'next/image'

// https://chatgpt.com/share/67b55454-75dc-8011-b040-0593b54c78f7
export default function End() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
          router.push("/intro_2"); // 3초 후 page2로 이동
        }, 1500);
    
        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 해제
      }, []);

      
  return (
    <>
      <div className="w-screen h-screen fixed z-20 flex flex-col justify-center items-center template_box gap-[40px]">
        <Image 
            src="/studio-logo.png"
            alt="Studio Logo"
            width="250"
            height="250"
        />
      </div>

      {/* bg */}
      <div className="w-screen h-screen gradient fixed z-10"></div>
    </>
  )
}
