'use client'

import { useState, useEffect } from 'react'
import Template from '@/components/template'
import { useRouter } from 'next/navigation'
import GlitchOverlay from '@/components/GlitchOverlay'

export default function NarrativePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()
  const [showGlitch, setShowGlitch] = useState(false)

  const scenes = [
    {
      characterName: 'Fen',
      paragraphText: 'While our journey together may be over, the story of your world is only just beginning. May you keep the knowledge you’ve gained close and keep applying it.',
      bgImage: '/bc-rb.png',
      characterImageSrc: '/fen/fen-h.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'While our journey together may be over, the story of your world is only just beginning. May you keep the knowledge you’ve gained close and keep applying it.',
      bgImage: '/bc-rb.png',
      characterImageSrc: '/fen/fen-h.png',
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
  }

  const handleBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? scenes.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (currentIndex === 1 && !showGlitch) {
      setShowGlitch(true)
    }
  }, [currentIndex, showGlitch])

  return (
    <>
      {showGlitch && (
        <GlitchOverlay
          duration={2000}
          onFinish={() => {
            router.push('/conclusion/orion')
          }}
        />
      )}
  
      <Template
        characterName={scenes[currentIndex].characterName}
        characterImageSrc={scenes[currentIndex].characterImageSrc}
        paragraphText={scenes[currentIndex].paragraphText}
        bgImage={scenes[currentIndex].bgImage}
        onNext={handleNext}
        onBack={handleBack}
        showBackButton={currentIndex !== 0}
      />
    </>
  )
}
