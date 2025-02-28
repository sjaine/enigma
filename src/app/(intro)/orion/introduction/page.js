'use client'

import { useState, useEffect } from 'react'
import Template from '@/components/template'
import { useRouter } from 'next/navigation'

export default function NarrativePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()

  const scenes = [
    {
      characterName: 'Orion',
      paragraphText: 'The world has always been so... predictable.',
      bgImage: '/orion/orion-bc.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'People are weak, blind, and easily swayed. Their hopes and dreams are nothing more than fragile illusions, waiting to be shattered. ',
      bgImage: '/orion/orion-bc.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'I didn’t get this far by playing fair. Betrayal? Deceit? They’re just tools, just means to an end.',
      bgImage: '/orion/orion-bc.png',
      characterImageSrc: '/orion/orion-l.png',
    },
    {
      characterName: 'Orion',
      paragraphText: ' I’ve built an empire from nothing, and now… I’ll transform this world to forge a new empire from its ashes. Nothing, no one will stand in my way.',
      bgImage: '/orion/orion-bc.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'With your assistance, I can determine the clues necessary to ensure history repeats itself. Double-cross me and see what happens when...',
      bgImage: '/orion/orion-bc.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: '*static* Your first test involves...',
      bgImage: '/orion/orion-bc.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: '*static* Your first test involves...',
      bgImage: '/orion/orion-bc.png',
      characterImageSrc: '/orion/orion-m.png',
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
  }

  const handleBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? scenes.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (currentIndex === 6) {
      router.push('/narrative')
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
