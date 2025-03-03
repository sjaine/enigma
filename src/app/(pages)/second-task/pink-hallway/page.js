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
      paragraphText: 'In this hallway, there are several hidden multi-linguistic clues. But which is the right one?',
      bgImage: '/bc-p.png',
      characterImageSrc: '/fen/fen-e.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'With your help, this next task involves translating and determining which phrase is the direct translation of the word: “Koyaanisqatsi”.',
      bgImage: '/bc-p.png',
      characterImageSrc: '/fen/fen-c.png',
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
  }

  const handleBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? scenes.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (currentIndex === 3) {
      router.push('/second-task/card')
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
