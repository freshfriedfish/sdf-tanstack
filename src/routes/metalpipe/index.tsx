import { useState, useRef, useEffect } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { MetalPipeRadioGroup, MetalPipeRadioGroupItem } from '@/components/metalpipe/radio-group'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'

function MetalPipePage() {
  const [sound, setSound] = useState('metal pipe')
  const [frequency, setfrequency] = useState([2])
  const [isPlaying, setIsPlaying] = useState(false)
  const [customSoundUrl, setCustomSoundUrl] = useState<string | null>(null)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isPlayingRef = useRef(false)

  // Sound file mapping
  const soundFiles: Record<string, string> = {
    'metal pipe': '/sounds/metalpipe.mp3',
    'kickball': '/sounds/kickball.mp3',
    'vine boom': '/sounds/vineboom.mp3',
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

      // Random delay between 0.5 and 3 seconds
      const randomDelay = Math.random() * 2500 + 500
      
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

  return (
    <div className="min-h-screen bg-radial-blue h-full mx-auto flex flex-col justify-start items-center gap-8 p-4">
      <h1 className="bg-linear-to-r from-gray-300 to-gray-600 bg-clip-text text-5xl font-bold text-transparent">
        Metal Pipe
      </h1>

      <MetalPipeRadioGroup value={sound} onValueChange={setSound} className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <MetalPipeRadioGroupItem
            value="metal pipe"
            id="metal-pipe"
          />
          <label htmlFor="metal-pipe" className="text-white text-base cursor-pointer select-none">
            metal pipe
          </label>
        </div>
        <div className="flex items-center gap-3">
          <MetalPipeRadioGroupItem
            value="kickball"
            id="kickball"
          />
          <label htmlFor="kickball" className="text-white text-base cursor-pointer select-none">
            kickball
          </label>
        </div>
        <div className="flex items-center gap-3">
          <MetalPipeRadioGroupItem
            value="vine boom"
            id="vine-boom"
          />
          <label htmlFor="vine-boom" className="text-white text-base cursor-pointer select-none">
            vineboom
          </label>
        </div>
        <div className="flex items-center gap-3">
          <MetalPipeRadioGroupItem
            value="custom sound"
            id="custom-sound"
          />
          <label htmlFor="custom-sound" className="text-white text-base cursor-pointer select-none">
            custom sound
          </label>
        </div>
      </MetalPipeRadioGroup>

      {sound === 'custom sound' && (
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <label className="text-white text-base">upload sound file</label>
          <Input type="file" accept="audio/*" onChange={handleFileChange} />
        </div>
      )}

      {/* unleash chaos = start, restore order = stop */}
      <div className="flex gap-4">
        <Button 
          className="text-base font-normal rounded-full h-11"
          onClick={startPlaying}
          disabled={isPlaying || (sound === 'custom sound' && !customSoundUrl)}
        >
          unleash chaos
        </Button>
        <Button 
          className="text-base font-normal rounded-full h-11"
          onClick={stopPlaying}
          disabled={!isPlaying}
        >
          restore order
        </Button>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-xs">
        <label className="text-foreground">frequency</label>
        <Slider
          value={frequency}
          onValueChange={setfrequency}
          min={0}
          max={4}
        />
      </div>

      <Link to="/metalpipe/download">
        <img 
          src="/images/appstore-gplay.png" 
          alt="Download on App Store and Google Play"
          className="fixed bottom-4 right-4 w-auto h-auto"
        />
      </Link>
    </div>
  )
}

export const Route = createFileRoute('/metalpipe/')({
  component: MetalPipePage,
})

