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
      paragraphText: 'Congratulations! You’ve identified the real news source. Keep in mind moving forward, that not everything is as it seems....',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-c.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'Now, you must find the next on-campus location using this hint: ',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-d.png',
    },
    {
      characterName: 'Fen',
      paragraphText: ' "I’m a path that’s painted bright, With walls that tell stories through art and light. Every step you take, a new scene unfolds, But stay too long, and the pictures grow cold. What am I?"',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-e.png',
    },
    {
      characterName: 'Fen',
      paragraphText: ' "I’m a path that’s painted bright, With walls that tell stories through art and light. Every step you take, a new scene unfolds, But stay too long, and the pictures grow cold. What am I?"',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-e.png',
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
