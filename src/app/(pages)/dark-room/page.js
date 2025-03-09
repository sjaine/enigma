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
      paragraphText: 'Fancy meeting you here... I know all about your correspondence with a certain fox-tailed traitor I once knew.',
      bgImage: 'bc-darkroom.png',
      characterImageSrc: '/orion/orion-l.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'While I am disappointed that you do not share my affinity for widespread metamorphosis,',
      bgImage: 'bc-darkroom.png',
      characterImageSrc: '/orion/orion-d.png',
    },
    {
      characterName: 'Orion',
      paragraphText: '... I must admit your persistence is impressive. Most would have broken by now.',
      bgImage: 'bc-darkroom.png',
      characterImageSrc: '/orion/orion-d.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'From now on, you will only do as I say.',
      bgImage: 'bc-darkroom.png',
      characterImageSrc: '/orion/orion-s.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'Find me at the forest entrance between the Athletic Centre and the Child Care Centre, if you really care about your world, as they say you do.',
      bgImage: 'bc-darkroom.png',
      characterImageSrc: '/orion/orion-s.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'Find me at the forest entrance between the Athletic Centre and the Child Care Centre, if you really care about your world, as they say you do.',
      bgImage: 'bc-darkroom.png',
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
    if (currentIndex === 5) {
      router.push('/fourth-task/card')
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
