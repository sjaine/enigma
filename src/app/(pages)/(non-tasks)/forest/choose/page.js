'use client'

import { useRouter } from 'next/navigation'

// https://chatgpt.com/share/67b55454-75dc-8011-b040-0593b54c78f7
export default function Choose() {
    const router = useRouter()

    const handleClick = (option) => {
        if (option === "Fen") {
            router.push("/trust/fen"); 
        } else {
            router.push("/trust/orion"); 
        }
      };

      
  return (
    <>
    <div className="fixed bg-light card text-brown border-2 border-brown rounded-3xl flex justify-center items-center flex-col p-5 gap-[30px]">
        <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
            <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">?</div>
            <p>Who Will YOU Trust?</p>
        </div>

        <div className="block w-full flex flex-col gap-[15px]">
            {["Fen", "Orion"].map(
            (option, index) => (
                <button
                key={index}
                className="block w-full border-2 border-brown text-brown logo text-xl font-bold py-2 px-4 rounded-full mt-2"
                onClick={() => handleClick(option)}
                >
                {option}
                </button>
            )
            )}  
        </div>
      </div>

      {/* bg */}
      <div className="h-screen w-screen bg-[url('/bc-choose.png')] bg-cover bg-center"></div>
    </>
  )
}
