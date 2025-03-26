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
      paragraphText: "You did it! The Enigma is withdrawing its grasp on your world. Your persistent determination has paid off.",
      bgImage: '/bc-rb.png',
      characterImageSrc: '/fen/fen-thumb.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'You didn’t just defeat evil; you restored balance and uncovered the means necessary to reignite hope in light of wickedness.',
      bgImage: '/bc-rb.png',
      characterImageSrc: '/fen/fen-thumb.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'You didn’t just defeat evil; you restored balance and uncovered the means necessary to reignite hope in light of wickedness.',
      bgImage: '/bc-rb.png',
      characterImageSrc: '/fen/fen-thumb.png',
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
      router.push('/conclusion/card')
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
