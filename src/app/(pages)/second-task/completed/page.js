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
      paragraphText: 'Excellent work! You’ve discovered the correct translation. In turn, you now know what fate this darkness will unleash upon your world. ',
      bgImage: '/bc-p.png',
      characterImageSrc: '/fen/fen-thumb.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'To continue your efforts to prevent your world from experiencing the same end as mine, head to the cafeteria and locate a QR code.',
      bgImage: '/bc-p.png',
      characterImageSrc: '/fen/fen-d.png',
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
