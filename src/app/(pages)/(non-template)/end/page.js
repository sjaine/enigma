import Image from 'next/image'

// https://chatgpt.com/share/67b55454-75dc-8011-b040-0593b54c78f7
export default function End() {
  return (
    <>
      <div className="w-screen h-screen fixed z-20 flex flex-col justify-center items-center template_box gap-[40px]">
        <Image 
            src="/enigma-logo.png"
            alt="Enigma Logo"
            width="180"
            height="180"
        />
        <p className="logo text-5xl">The End!</p>
      </div>

      {/* bg */}
      <div className="w-screen h-screen gradient fixed z-10"></div>
    </>
  )
}
