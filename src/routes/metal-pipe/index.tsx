import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

function MetalPipePage() {
  const [sound, setSound] = useState('metal pipe')
  const [interval, setInterval] = useState([50])

  return (
    <div className="min-h-screen bg-radial-blue h-full mx-auto flex flex-col justify-center items-center gap-8 p-4">
      <h1 className="bg-linear-to-r from-gray-300 to-gray-600 bg-clip-text text-5xl font-bold text-transparent">
        Metal Pipe
      </h1>

      <RadioGroup value={sound} onValueChange={setSound} className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="metal pipe"
            id="metal-pipe"
            className="bg-white border-white data-[state=checked]:border-blue-500 [&_svg]:fill-blue-500"
          />
          <label htmlFor="metal-pipe" className="text-foreground cursor-pointer">
            metal pipe
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="kickball"
            id="kickball"
            className="bg-white border-white data-[state=checked]:border-blue-500 [&_svg]:fill-blue-500"
          />
          <label htmlFor="kickball" className="text-foreground cursor-pointer">
            kickball
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="vine boom"
            id="vine-boom"
            className="bg-white border-white data-[state=checked]:border-blue-500 [&_svg]:fill-blue-500"
          />
          <label htmlFor="vine-boom" className="text-foreground cursor-pointer">
            vine boom
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="custom sound"
            id="custom-sound"
            className="bg-white border-white data-[state=checked]:border-blue-500 [&_svg]:fill-blue-500"
          />
          <label htmlFor="custom-sound" className="text-foreground cursor-pointer">
            custom sound
          </label>
        </div>
      </RadioGroup>

      <div className="flex gap-4">
        <Button>start</Button>
        <Button>stop</Button>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-xs">
        <label className="text-foreground">interval</label>
        <Slider
          value={interval}
          onValueChange={setInterval}
          min={0}
          max={5}
        />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/metal-pipe/')({
  component: MetalPipePage,
})

