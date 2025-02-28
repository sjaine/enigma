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
      paragraphText: 'There’s not much time, so I’ll make this quick: To prevent your world from reliving the past, you must find the first clue.',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-uu.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'Your first mission involves finding the location on campus that fulfills this tricky riddle: ',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-e.png',
    },
    {
      characterName: 'Fen',
      paragraphText: '“I hold many worlds yet never leave my place. Pages turn within me, but I never show my face. What am I?”',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-e.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'Once you’ve determined the location, head there and begin searching for Instagram @account_names.',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-d.png',
    },
    {
      characterName: 'Fen',
      paragraphText: ' Then, explore them on your personal device to determine which amongst the fake news is real. With each account found, you’ll be one step closer to saving your world. Best of luck!',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-e.png',
    },
    {
      characterName: 'Fen',
      paragraphText: ' Then, explore them on your personal device to determine which amongst the fake news is real. With each account found, you’ll be one step closer to saving your world. Best of luck!',
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
    if (currentIndex === 5) {
      router.push('/card')
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
