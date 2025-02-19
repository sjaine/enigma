import Image from 'next/image'

function Narrative() {
    return(
        <div>
            <div className="w-screen h-screen fixed z-20 flex justify-end items-end">
                {/* Main */}
                <div className="mb-5 relative">
                    {/* Character */}
                    <Image className="absolute bottom-52" src="/fen.png" alt="Fen" width={230} height={230} />

                    {/* Boxes */}
                    <div className="w-full relative  p-4">
                        <p className="inline-block rounded-lg text-light bg-brown px-10 logo text-3xl absolute top-0 left-10">Fen</p>
                        <p className="bg-light text-brown w-full h-40 border-2 border-brown rounded-3xl flex justify-center item-center p-7">Paragraph sample: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo ante. Ut ornare mi non imperdiet pretium.</p>

                        {/* Btns */}
                        <div className="flex w-full justify-between mt-2.5">
                            <Image src="/back_btn.svg" alt="back btn" width={50} height={50} />
                            <Image src="/next_btn.svg" alt="back btn" width={50} height={50} />
                        </div>
                    </div>
                </div>
            </div>

            {/* bg */}
            <div className="w-screen h-screen gradient fixed z-10"></div>
            <div className="w-screen h-screen bg-bc-1 bg-cover bg-no-repeat fixed z-0"></div>
        </div>
    )
}

export default Narrative