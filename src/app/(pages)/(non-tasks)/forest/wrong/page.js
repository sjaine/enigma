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
      paragraphText: 'Ah! I’m so glad you made it okay. If you run into a certain evil bird, you must not trust anything he says.',
      bgImage: '/forest.png',
      characterImageSrc: '/fen/fen-h.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'He knows we’re working together; he’ll do anything to fulfill his selfish ambitions.',
      bgImage: '/forest.png',
      characterImageSrc: '/fen/fen-w.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'To prevent the Enigma from infecting your world as he has done to mine, we must stick together.',
      bgImage: '/forest.png',
      characterImageSrc: '/fen/fen-w.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'After all, you’re only useful to me as long as you follow my instructions.',
      bgImage: '/forest.png',
      characterImageSrc: '/fen/fen-e.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'For the final clue, you must unscramble this word: “nkesremoecs”.',
      bgImage: '/forest.png',
      characterImageSrc: '/fen/fen-c.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'For the final clue, you must unscramble this word: “nkesremoecs”.',
      bgImage: '/forest.png',
      characterImageSrc: '/fen/fen-c.png',
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
      router.push('/dark-room')
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
