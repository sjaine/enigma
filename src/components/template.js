import Image from 'next/image'

// https://chatgpt.com/share/67b55454-75dc-8011-b040-0593b54c78f7
export default function Template({
  characterName,
  paragraphText,
  bgImage,
  onNext,
  onBack,
  showBackButton,
}) {
  return (
    <>
      <div className="w-screen h-screen fixed z-20 flex justify-end items-end">

        {/* Main */}
        <div className="mb-20 relative w-full">

          {/* Character Image - Dynamic based on characterName */}
          <Image
            className="absolute bottom-52"
            src={`/${characterName.toLowerCase()}.png`}
            alt={characterName}
            width={230}
            height={230}
          />

          {/* Boxes */}
          <div className="w-full relative p-4">
            <p className="inline-block rounded-lg text-light bg-brown px-10 logo text-3xl absolute top-0 left-10">
              {characterName}
            </p>
            <p className="bg-light text-brown w-full h-40 border-2 border-brown rounded-3xl flex justify-center items-center p-7">
              {paragraphText}
            </p>

            {/* Btns */}
            <div className="flex w-full justify-between mt-2.5">
              {/* Conditionally Render Back Button */}
              {showBackButton ? (
                <button onClick={onBack}>
                  <img src="/back_btn.svg" alt="back btn" width={50} height={50} />
                </button>
              ) : (
                <div></div> // Placeholder to keep spacing
              )}
              <button onClick={onNext}>
                <img src="/next_btn.svg" alt="next btn" width={50} height={50} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* bg */}
      <div className="w-screen h-screen gradient fixed z-10"></div>
      <div
        className="w-screen h-screen bg-cover bg-no-repeat fixed z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </>
  )
}
