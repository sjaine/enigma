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
      paragraphText: 'Great job! You’ve succeeded in temporarily restoring the balance, and seen a glimpse of how balance can ....',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-e.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'Oh no.... we’re breaking up....',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-s.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'The shadow... the Enigma.... It’s here... There’s not much time... Remember everything you’ve learned thus far... Head to the entrance of the forest behind the college... ',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-uu.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'The shadow... the Enigma.... It’s here... There’s not much time... Remember everything you’ve learned thus far... Head to the entrance of the forest behind the college... ',
      bgImage: '/bc-1.png',
      characterImageSrc: '/fen/fen-uu.png',
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
      router.push('/first-task/card')
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
