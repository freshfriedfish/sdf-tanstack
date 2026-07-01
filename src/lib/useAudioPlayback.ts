import { useState, useRef, useEffect } from 'react'

// Sound file mapping
const soundFiles: Record<string, string> = {
  'metal pipe': '/sounds/metalpipe.mp3',
  'kickball': '/sounds/kickball.mp3',
  'vine boom': '/sounds/vineboom.mp3',
}

export function useAudioPlayback(frequency: number = 2) {
  const [sound, setSound] = useState('metal pipe')
  const [isPlaying, setIsPlaying] = useState(false)
  const [customSoundUrl, setCustomSoundUrl] = useState<string | null>(null)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isPlayingRef = useRef(false)

  // Get delay range based on frequency level
  const getDelayRange = (freq: number) => {
    switch (freq) {
      case 0: // dormant: 60-180 seconds
        return { min: 60000, max: 180000 }
      case 1: // slight: 10-60 seconds
        return { min: 10000, max: 60000 }
      case 2: // moderate: 1-10 seconds
        return { min: 1000, max: 10000 }
      case 3: // chaotic: 0.5-3 seconds
        return { min: 500, max: 3000 }
      case 4: // max: 0.1-1 seconds
        return { min: 100, max: 1000 }
      default:
        return { min: 1000, max: 10000 } // default to moderate
    }
  }

  // Cleanup custom sound URL on unmount
  useEffect(() => {
    return () => {
      if (customSoundUrl) {
        URL.revokeObjectURL(customSoundUrl)
      }
    }
  }, [customSoundUrl])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
      timeoutRefs.current = []
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Revoke previous URL if exists
      if (customSoundUrl) {
        URL.revokeObjectURL(customSoundUrl)
      }
      const url = URL.createObjectURL(file)
      setCustomSoundUrl(url)
    }
  }

  const playSound = () => {
    let soundUrl: string | null = null

    if (sound === 'custom sound' && customSoundUrl) {
      soundUrl = customSoundUrl
    } else {
      soundUrl = soundFiles[sound] || null
    }

    if (soundUrl) {
      const audio = new Audio(soundUrl)
      audioRef.current = audio
      audio.play().catch(err => {
        console.error('Error playing sound:', err)
      })
    }
  }

  const startPlaying = () => {
    if (isPlayingRef.current) return

    setIsPlaying(true)
    isPlayingRef.current = true

    const scheduleNext = () => {
      if (!isPlayingRef.current) return

      const { min, max } = getDelayRange(frequency)
      const randomDelay = Math.random() * (max - min) + min

      const timeout = setTimeout(() => {
        if (isPlayingRef.current) {
          playSound()
          scheduleNext()
        }
      }, randomDelay)

      timeoutRefs.current.push(timeout)
    }

    // Play first sound immediately
    playSound()
    scheduleNext()
  }

  const stopPlaying = () => {
    isPlayingRef.current = false
    setIsPlaying(false)
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    timeoutRefs.current = []
    
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  return {
    sound,
    setSound,
    isPlaying,
    customSoundUrl,
    handleFileChange,
    startPlaying,
    stopPlaying,
  }
}
