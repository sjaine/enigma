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
      paragraphText: 'Hey there! You must be the one I’ve been searching for. I’m Fen, an exiled warrior from another world that used to exist not too far from here.',
      bgImage: '/fen/fen-bc.png',
      characterImageSrc: '/fen/fen-h.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'My home, once vibrant, and full of life was reduced to ruin by an enemy of the likes this world has never seen. And now that same darkness is coming here...  ',
      bgImage: '/fen/fen-bc.png',
      characterImageSrc: '/fen/fen-d.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'I know what the Enigma is capable of. If we do not stand together, your world will share the same end as mine. But I will not let that happen. Not again. ',
      bgImage: '/fen/fen-bc.png',
      characterImageSrc: '/fen/fen-c.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'You may not see it yet, but you have a role to play in this, just as I do. I will fight beside you and guide you to see this through to the end. ',
      bgImage: '/fen/fen-bc.png',
      characterImageSrc: '/fen/fen-thumb.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'But we must act quickly—because he is already on his way.',
      bgImage: '/fen/fen-bc.png',
      characterImageSrc: '/fen/fen-u.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'Together, we can unearth the clues necessary to prevent history from repeating itself... ',
      bgImage: '/fen/fen-bc.png',
      characterImageSrc: '/fen/fen-c.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'Together, we can unearth the clues necessary to prevent history from repeating itself... ',
      bgImage: '/fen/fen-bc.png',
      characterImageSrc: '/fen/fen-c.png',
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
  }

  const handleBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? scenes.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (currentIndex === 6) {
      router.push('/first-task')
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
