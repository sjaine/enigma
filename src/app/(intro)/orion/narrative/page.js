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
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'People are weak, blind, and easily swayed.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'heir hopes and dreams are nothing more than fragile illusions, waiting to be shattered.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'I didn’t get this far by playing fair. Betrayal? Deceit? They’re just tools, just means to an end.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'I’ve built an empire from nothing, and now… I’ll transform this world to forge a new empire from its ashes. Nothing, no one will stand in my way.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'With your assistance, I can determine the clues necessary to ensure history repeats itself. Double-cross me and see what happens when...',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'Your first test involves...',
      bgImage: '/bc-1.png',
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
  }

  const handleBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? scenes.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (currentIndex === 12) {
      router.push('/map')
    }
  }, [currentIndex, router])

  return (
    <Template
      characterName={scenes[currentIndex].characterName}
      paragraphText={scenes[currentIndex].paragraphText}
      bgImage={scenes[currentIndex].bgImage}
      onNext={handleNext}
      onBack={handleBack}
      showBackButton={currentIndex !== 0}
    />
  )
}
