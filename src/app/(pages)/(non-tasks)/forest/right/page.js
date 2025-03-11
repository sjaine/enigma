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
      paragraphText: 'Took you long enough... I could have conquered universes in the time it has taken you to find me.',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'Now that I have you, I need you to decipher this anagram for me: “eye eht steem naht yrots eht ot erom s’ereht”.',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-l.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'I must be missing an angle here, I’ve looked at it from almost every perspective, but I must be missing something...',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-c.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'It’s the final piece to the puzzle, but it requires a subject from your world to translate it.  So far, I have been unsuccessful, but I will not remain so for long.',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'To decipher the anagram, you must look at it from a new perspective.',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'To figure out which tool can help you fulfill this final task, first determine what reflects this riddle.',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'I speak without a tongue, yet tell no lies.',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'I show you the world, But only through your eyes. I follow your steps, Yet never leave my place. What am I? ',
      bgImage: '/forest.png',
      characterImageSrc: '/orion/orion-m.png',
    },
    {
      characterName: 'Orion',
      paragraphText: 'I show you the world, But only through your eyes. I follow your steps, Yet never leave my place. What am I? ',
      bgImage: '/forest.png',
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
    if (currentIndex === 8) {
      router.push('/forest/card')
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
