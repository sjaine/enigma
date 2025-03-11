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
      paragraphText: 'I’ve found a way to intercept the Enigma’s connection to you for a short time... What did you find for Orion? Please, the future of your world depends on you...',
      bgImage: '/forest.png',
      characterImageSrc: '/fen/fen-c.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'Tell me what you’ve found. It’s so close... Your world.... it’s almost mine...',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-l.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'Tell me what you’ve found. It’s so close... Your world.... it’s almost mine...',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-l.png',
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
      router.push('/forest/choose')
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
