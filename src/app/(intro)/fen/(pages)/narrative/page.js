'use client'

import { useState, useEffect } from 'react'
import Template from '@/components/template'
import { useRouter } from 'next/navigation'

export default function NarrativePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()

  const scenes = [
    {
      characterName: 'Fen',
      paragraphText: 'Hey there! You must be the one I’ve been searching for.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'I’m Fen, an exiled warrior from another world that used to exist not too far from here.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'My home, once vibrant, and full of life was reduced to ruin by an enemy of the likes this world has never seen.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'And now that same darkness is coming here...',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'I know what the Enigma is capable of. If we do not stand together, your world will share the same end as mine.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'But I will not let that happen. Not again.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'You may not see it yet, but you have a role to play in this, just as I do. I will fight beside you and guide you to see this through to the end.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'But we must act quickly—because he is already on his way.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'Together, we can unearth the clues necessary to prevent history from repeating itself...',
      bgImage: '/bc-1.png',
    },
    {
    // Before here, there should be some effects looks like interrupted from something.
      characterName: 'Fen',
      paragraphText: 'There’s not much time, so I’ll make this quick: To prevent your world from reliving the past, you must find the first clue.',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'Your first mission involves finding the location on campus that fulfills this tricky riddle: ',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: '“I hold many worlds yet never leave my place. Pages turn within me, but I never show my face. What am I?”',
      bgImage: '/bc-1.png',
    },
    {
      characterName: 'Fen',
      paragraphText: '“I hold many worlds yet never leave my place. Pages turn within me, but I never show my face. What am I?”',
      bgImage: '/bc-1.png',
    },
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
