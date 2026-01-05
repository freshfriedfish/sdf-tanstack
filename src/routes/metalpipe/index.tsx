import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { MetalPipeRadioGroup, MetalPipeRadioGroupItem } from '@/components/metalpipe/radio-group'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useAudioPlayback } from '@/lib/useAudioPlayback'

function MetalPipePage() {
  const [frequency, setFrequency] = useState([2])
  const [aboutOpen, setAboutOpen] = useState(false)
  
  const getFrequencyLabel = (value: number) => {
    const labels = ['dormant', 'slight', 'moderate', 'chaotic', 'max']
    return labels[value] || 'moderate'
  }
  const {
    sound,
    setSound,
    isPlaying,
    customSoundUrl,
    handleFileChange,
    startPlaying,
    stopPlaying,
  } = useAudioPlayback(frequency[0])

  return (
    <div className="min-h-screen bg-radial-blue h-full mx-auto flex flex-col justify-start items-center gap-8 p-4">
      <div className="relative w-full flex justify-center items-center">
        <h1 className="bg-linear-to-r from-gray-300 to-gray-600 bg-clip-text text-5xl font-bold text-transparent">
          Metal Pipe
        </h1>
        <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
          <DialogTrigger asChild>
            <Button 
               
              className="absolute top-0 right-0"
            >
              About
            </Button>
          </DialogTrigger>
          <DialogContent>
            
            <DialogHeader>
              <DialogTitle>About</DialogTitle>
            <div className="">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/xsv41zSvsNo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
              <DialogDescription>
                Metal Pipe is a fun sound generator application that plays random sounds at customizable intervals.
                Choose from preset sounds or upload your own audio file to create a unique experience.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

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
        <div className="flex items-center justify-between">
          <label className="text-foreground">frequency</label>
          {frequency[0] === 4 ? (
            <Badge className="text-base font-thin px-1.5 py-0 animate-rotating-shake">
              {getFrequencyLabel(frequency[0])}
            </Badge>
          ) : (
            <span className="text-foreground inline-block">
              {getFrequencyLabel(frequency[0])}
            </span>
          )}
        </div>
        <Slider
          value={frequency}
          onValueChange={setFrequency}
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

