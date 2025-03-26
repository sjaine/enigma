import Image from 'next/image'

// https://chatgpt.com/share/67b55454-75dc-8011-b040-0593b54c78f7
export default function Template({
  characterName,
  paragraphText,
  characterImageSrc,
  cardImageSrc,
  onNext,
  onBack,
  showBackButton,
}) {
  return (
    <>
      <div className="w-screen h-screen fixed z-20 flex justify-end items-end template_box">

        {/* Main */}
        <div className="mb-20 relative w-full p-4">
          {/* Images */}
          <Image
              src={cardImageSrc}
              alt={cardImageSrc}
              width={0}
              height={0}
              className="w-full h-full mb-10"
            />

          {/* Boxes */}
          <div className="w-full relative flex">
            <Image
              className="bg-light border-2 border-brown rounded-2xl flex justify-center items-center mr-3"
                src={characterImageSrc}
                alt={characterName}
                width={116}
                height={116}
              />
            <p className="bg-light text-brown w-full border-2 border-brown rounded-2xl flex justify-center items-center p-4 manrope text-xs">
              {paragraphText}
            </p>
          </div>

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

      {/* bg */}
      <div className="w-screen h-screen gradient fixed z-10"></div>
      <div
        className="w-screen h-screen bg-darkerGreen fixed z-0"
      ></div>
    </>
  )
}
