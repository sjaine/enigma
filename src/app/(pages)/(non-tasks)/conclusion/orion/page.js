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
    if (currentIndex === 3) {
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
