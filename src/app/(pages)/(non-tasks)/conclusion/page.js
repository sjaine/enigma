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
      paragraphText: "You did it! The Enigma is withdrawing its grasp on your world. Your persistent determination has paid off.",
      bgImage: '/bc-rb.png',
      characterImageSrc: '/fen/fen-thumb.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'You didn’t just defeat evil; you restored balance and uncovered the means necessary to reignite hope in light of wickedness',
      bgImage: '/bc-rb.png',
      characterImageSrc: '/fen/fen-thumb.png',
    },
    {
      characterName: 'Fen',
      paragraphText: 'While our journey together may be over, the story of your world is only just beginning. May you keep the knowledge you’ve gained close and keep applying it.',
      bgImage: '/bc-rb.png',
      characterImageSrc: '/fen/fen-h.png',
    },
    {
        characterName: 'Orion',
        paragraphText: 'You think you’ve won? You fight for hope. I fight because I know hope is a lie. No matter how many times you strike me down, my legacy will remain.',
        bgImage: '/orion/orion-bc.png',
        characterImageSrc: '/orion/orion-l.png',
      },
      {
        characterName: 'Orion',
        paragraphText: 'The world will remember me… but will it remember you?',
        bgImage: '/orion/orion-bc.png',
        characterImageSrc: '/orion/orion-l.png',
      },
      {
        characterName: 'Orion',
        paragraphText: 'My shadow will wait unseen, in the veil of darkness, ready to return at any moment. You’ll see, I am the one who decides how this story ends.',
        bgImage: '/orion/orion-bc.png',
        characterImageSrc: '/orion/orion-l.png',
      },
      {
        characterName: 'Orion',
        paragraphText: 'My shadow will wait unseen, in the veil of darkness, ready to return at any moment. You’ll see, I am the one who decides how this story ends.',
        bgImage: '/orion/orion-bc.png',
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
    if (currentIndex === 6) {
      router.push('/end')
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
