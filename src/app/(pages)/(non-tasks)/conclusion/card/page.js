'use client'

import { useState, useEffect } from 'react'
import Template from '@/components/template-conclusion'
import { useRouter } from 'next/navigation'

export default function NarrativePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()

  const scenes = [
    {
    // Before here, there should be some effects looks like interrupted from something.
      characterName: 'Fen',
      paragraphText: "Looking beyond surface appearances to determine what’s true and what’s not (via deciphering real news amongst fake news, and recognizing that not everything is as it appears...)",
      cardImageSrc: '/card/one.svg',
      characterImageSrc: '/card/fen.png',
    },
    {
    // Before here, there should be some effects looks like interrupted from something.
      characterName: 'Fen',
      paragraphText: "Being open to learning new things to uncover deeper truths. (via determining the direct translation of the phrase “Koyaanisqatsi”)",
      cardImageSrc: '/card/two.svg',
      characterImageSrc: '/card/fen.png',
    },
    {
    // Before here, there should be some effects looks like interrupted from something.
      characterName: 'Fen',
      paragraphText: "Recognizing the significance of balance in life... (via restoring the balance of the scale in the scale-balance game)",
      cardImageSrc: '/card/three.svg',
      characterImageSrc: '/card/fen.png',
    },
    {
    // Before here, there should be some effects looks like interrupted from something.
      characterName: 'Fen',
      paragraphText: "Looking at the world from different perspectives, to see the bigger picture and make more informed decisions.",
      cardImageSrc: '/card/four.svg',
      characterImageSrc: '/card/fen.png',
    },
    {
    // Before here, there should be some effects looks like interrupted from something.
      characterName: 'Fen',
      paragraphText: "Looking at the world from different perspectives, to see the bigger picture and make more informed decisions.",
      cardImageSrc: '/card/four.svg',
      characterImageSrc: '/card/fen.png',
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
  }

  const handleBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? scenes.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (currentIndex === 4) {
      router.push('/conclusion/fen')
    }
  }, [currentIndex, router])

  return (
    <Template
      characterName={scenes[currentIndex].characterName}
      characterImageSrc={scenes[currentIndex].characterImageSrc}
      paragraphText={scenes[currentIndex].paragraphText}
      cardImageSrc={scenes[currentIndex].cardImageSrc}
      onNext={handleNext}
      onBack={handleBack}
      showBackButton={currentIndex !== 0}
    />
  )
}
