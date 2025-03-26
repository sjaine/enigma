// components/GlitchOverlay.js
'use client'

import { useEffect, useState } from 'react'
import styles from './GlitchOverlay.module.css'

export default function GlitchOverlay({ duration = 2000, onFinish }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      if (onFinish) onFinish()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onFinish])

  if (!show) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.glitchText}>! ERROR !</div>
    </div>
  )
}
