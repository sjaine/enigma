'use client'

import { useRouter } from 'next/navigation'

export default function NarrativePage() {
  const router = useRouter()

  const handleClick = (option) => {
    if (option === "There's more to the story than meets the eye.") {
      router.push("/forest"); 
    } else {
      alert("Try again!");
    }
  };

  return (
    <>
    <div className="h-screen w-screen bg-[url('/forest.png')] bg-cover bg-center"></div>

      <div className="fixed bg-light card text-brown border-2 border-brown rounded-3xl flex justify-center items-center flex-col p-5 gap-[30px]">
        <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
            <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">?</div>
            <p>What am I?</p>
        </div>

        <div className="block w-full flex flex-col gap-[15px]">
            {["Not everything is as it seems...", "There's more to the story than meets the eye."].map(
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
    </>
  )
}
