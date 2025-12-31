import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MetalPipeRadioGroup, MetalPipeRadioGroupItem } from '@/components/metalpipe/radio-group'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'

function MetalPipePage() {
  const [sound, setSound] = useState('metal pipe')
  const [interval, setInterval] = useState([2])

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
          <Input type="file" accept="audio/*" />
        </div>
      )}

      {/* unleash chaos = start, restore order = stop */}
      <div className="flex gap-4">
        <Button className="text-base font-normal rounded-full h-11">unleash chaos</Button>
        <Button className="text-base font-normal rounded-full h-11">restore order</Button>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-xs">
        <label className="text-foreground">interval</label>
        <Slider
          value={interval}
          onValueChange={setInterval}
          min={0}
          max={4}
        />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/metalpipe/')({
  component: MetalPipePage,
})

