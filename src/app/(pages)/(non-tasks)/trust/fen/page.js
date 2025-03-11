'use client'

import { useState, useEffect } from 'react'
import Template from '@/components/template'
import { useRouter } from 'next/navigation'

export default function NarrativePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()

  const scenes = [
    {
    // Before here, there should be some effects looks like interrupted from something.
      characterName: 'Fen',
      paragraphText: "I knew you had it in you! This last clue – it's the key to everything we've been working towards. With this, we can destroy the Enigma once and for all.",
      bgImage: '/forest.png',
      characterImageSrc: '/fen/fen-c.png',
    },
    {
      characterName: 'Fen',
      paragraphText: ' The path hasn’t been easy, but you’ve come so far. The pieces are all falling into place now.',
      bgImage: '/forest.png',
      characterImageSrc: '/fen/fen-h.png',
    },
    {
      characterName: 'Fen',
      paragraphText: ' The path hasn’t been easy, but you’ve come so far. The pieces are all falling into place now.',
      bgImage: '/forest.png',
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
    if (currentIndex === 2) {
      router.push('/goend')
    }
  }, [currentIndex, router])

  return (
    <Template
      characterName={scenes[currentIndex].characterName}
      characterImageSrc={scenes[currentIndex].characterImageSrc}
      paragraphText={scenes[currentIndex].paragraphText}
      bgImage={scenes[currentIndex].bgImage}
      onNext={handleNext}
      onBack={handleBack}
      showBackButton={currentIndex !== 0}
    />
  )
}
