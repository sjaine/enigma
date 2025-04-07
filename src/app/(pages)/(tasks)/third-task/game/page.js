// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
"use client";

import { useState } from 'react'

function Map() {
    const [step, setStep] = useState(1);

  return (
    <>
      <div className="fixed bg-light card text-brown border-2 border-brown rounded-3xl flex justify-center items-center flex-col p-5 gap-[30px]">
        {step === 1 && (
            // Question
            <>
            <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
                <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">?</div>
                <p>Game Instructions</p>
            </div>

            <div>
                <img src="/cookinggame/instruction1.png" alt="Instruction" className="questImg mb-5" />
                <p className="text-xl text-brown mt-2 subhead">Step 1. Drag each ingredient into the pot.</p>
                <p className="text-xl text-brown mt-3 subhead italic">🌟 Tip: Keep the same amount for each ingredient!</p>
            </div>
            
            <button
                onClick={() => setStep(2)}
                className="bg-redLight border-2 border-brown text-light font-bold py-2 px-4 mt-4 rounded-full logo text-xl"
            >
                Next
            </button>
            </>
        )}

        {step === 2 && (
            // Choice
            <>
            <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
                <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">?</div>
                <p>Game Instructions</p>
            </div>

            <div>
                <img src="/cookinggame/instruction2.png" alt="Instruction" className="questImg mb-5" />
                <p className="text-xl text-brown mt-2 subhead">Step 2. Tap the stove switch to set the heat level.</p>
                <p className="text-xl text-brown mt-3 subhead italic">🌟 Tip: Don’t overcook it!</p>
            </div>
            
            <button
                onClick={() => setStep(3)}
                className="bg-redLight border-2 border-brown text-light font-bold py-2 px-4 mt-4 rounded-full logo text-xl"
            >
                Next
            </button>
            </>
        )}

        {step === 3 && (
            // Wrong!
            <>
            <div className="logo flex flex-col justify-center items-center text-3xl gap-[7px]">
                <div className="bg-brown text-light w-[45px] h-[45px] rounded-full flex justify-center items-center">?</div>
                <p>Game Instructions</p>
            </div>

            <div>
                <img src="/cookinggame/instruction3.png" alt="Instruction" className="questImg mb-5" />
                <p className="text-xl text-brown mt-2 subhead">Step 3. Hit the ‘COOK’ button to see your result!</p>
            </div>
            
            <button
                onClick={() => window.location.href = 'https://cooking-game.netlify.app/'}
                className="bg-redLight border-2 border-brown text-light font-bold py-2 px-4 mt-4 rounded-full logo text-xl"
            >
                Start a game!
            </button>
            </>
        )}
      </div>

      <div className="w-screen h-screen gradient fixed z-10"></div>
      <div
        className="w-screen h-screen bg-cover bg-no-repeat fixed z-0"
        style={{ backgroundImage: `url("/bc-c.png")` }}
      ></div>
    </>
  )
}

export default Map;
