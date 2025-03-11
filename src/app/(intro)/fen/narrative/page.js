'use client'

import { useState, useEffect } from 'react'
import Template from '@/components/template'
import { useRouter } from 'next/navigation'

export default function NarrativePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()

  const scenes = [{
      characterName: '',
      paragraphText: 'The year is 2025. The world as you know it is on the verge of encountering a darkness it has not seen in some time.  ',
      bgImage: '/bc-1.png',
      characterImageSrc: '',
    },
    {
      characterName: '',
      paragraphText: 'An inky shadow has plans to root itself in your world, and parallel the destruction it has forged in alternative worlds.',
      bgImage: '/bc-1.png',
      characterImageSrc: '',
    },
    {
      characterName: '',
      paragraphText: ' You are one of the few who can navigate this world, and uncover secrets long forgotten to help restore it, before it’s too late. ',
      bgImage: '/bc-1.png',
      characterImageSrc: '',
    },
    {
      characterName: '',
      paragraphText: 'Your First Task: Travel to the rainbow bridge and scan the QR code to enter Enigma. ',
      bgImage: '/bc-1.png',
      characterImageSrc: '',
    },
    {
      characterName: '',
      paragraphText: 'Your First Task: Travel to the rainbow bridge and scan the QR code to enter Enigma. ',
      bgImage: '/bc-1.png',
      characterImageSrc: '',
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length)
  }

  const handleBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? scenes.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (currentIndex === 4) {
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
