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
      paragraphText: 'You’ve played your part perfectly, unaware of what you’ve truly uncovered.',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-l.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'This final clue? It’s everything I’ve been waiting for. You’ve given me everything I need to complete my masterpiece.... ',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'This... YOU! No, this wasn’t supposed to happen. You were supposed to fail...',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-s.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'This... YOU! No, this wasn’t supposed to happen. You were supposed to fail...',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-s.png',
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
