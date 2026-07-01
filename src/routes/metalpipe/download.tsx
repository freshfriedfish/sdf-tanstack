import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { FaApple, FaAndroid } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function MetalPipeAppPage() {
  const screenshots = [
    '/images/metalpipe-screenshot/1.jpg',
    '/images/metalpipe-screenshot/2.jpg',
    '/images/metalpipe-screenshot/3.jpg',
    '/images/metalpipe-screenshot/4.jpg',
  ]

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="min-h-screen h-full mx-auto flex flex-col justify-start items-center gap-8 p-4 bg-radial-blue">
      <div className="max-w-4xl w-full flex flex-col items-center gap-8">
        {/* App Icon, Name/Subheading, and Download Buttons - Same Level */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
          {/* App Icon */}
          <img 
            src="/images/metal-pipe-logo.png" 
            alt="Metal Pipe App Icon"
            className="w-48 h-48 shrink-0 rounded-md"
          />
          
          {/* App Name, Subheading, and Download Buttons */}
          <div className="flex flex-col items-center md:items-start gap-4 flex-1">
            <div className="flex flex-col items-center md:items-start gap-2">
              <h1 className="bg-linear-to-r from-white to-gray-600 bg-clip-text text-5xl font-bold text-transparent">Metal Pipe</h1>
              <p className="text-gray-400 text-2xl">Dynamic audio scheduling!</p>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <Button 
                asChild
                className="flex items-center gap-3.5 h-auto py-2 px-3 rounded-xl border border-gray-500 bg-black"
                variant="ghost"
              >
                <a href="https://drive.google.com/file/d/16XkVyg33K-801WG5RCOkSaapM5dDk--u/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-md border border-gray-500  flex items-center justify-center shrink-0">
                    <FaApple size={36} style={{ width: '36px', height: '36px' }} className="text-white" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xl font-bold text-white leading-tight">Download .ipa</span>
                    <span className="text-base text-gray-400 leading-tight">For IOS</span>
                  </div>
                </a>
              </Button>
              <Button 
                asChild
                className="flex items-center gap-3.5 h-auto py-2 px-3 rounded-xl border border-gray-500 bg-black"
                variant="ghost"
              >
                <a href="https://drive.google.com/file/d/1LSrkTrxO4_tRagN4wT3i3FgqMHGshuMr/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-md border border-gray-500 flex items-center justify-center shrink-0">
                    <FaAndroid size={36} style={{ width: '36px', height: '36px' }} className="text-white" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xl font-bold text-white leading-tight">Download .apk</span>
                    <span className="text-base text-gray-400 leading-tight">for Android</span>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Screenshots Carousel */}
        <div className="w-full max-w-4xl flex flex-col gap-4 mt-4">
          <h2 className="text-4xl font-semibold">Screenshots</h2>
          
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/3">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={screenshot} 
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          {/* Image counter */}
          <p className="text-center text-gray-400 text-sm md:hidden">
            Image {current}/{screenshots.length}
          </p>
        </div>
        <div className="w-full max-w-4xl flex flex-col gap-4 mt-4">
          <h2 className="text-4xl font-semibold">Description</h2>
          <p className="text-gray-400 text-xl">
            Metal Pipe is an app that allows you to play audio at random intervals.<br />
                            This app plays sounds in the background depending on your chosen preset sound (or custom sound) and frequency. Leave the app open in the background and it'll play your chosen sound in the background at random intervals..<br />
          </p>
        </div>
        <div className="w-full max-w-4xl flex flex-col gap-4 mt-4">
          <h2 className="text-4xl font-semibold">Installation</h2>
          <div>
            <h3 className="text-lg font-semibold text-white mt-2">For iOS</h3>
            <p className="text-gray-400 text-xl">
              Unfortunately, you will need to sideload the app on your iPhone yourself.{' '}
              <a 
                href="https://faq.altstore.io/altstore-classic/how-to-install-altstore-macos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 underline"
              >
                Follow these instructions
              </a>
              {' '}to install AltStore
            </p>
            <h3 className="text-lg font-semibold text-white mt-2">For Android</h3>
            <p className="text-gray-400 text-xl">
              Simply install the APK and enjoy!
            </p>
          </div>

        </div>

        {/* Go back link */}
        <div className="w-full max-w-4xl flex justify-center mt-8 mb-4">
          <Link 
            to="/metalpipe"
            className="text-gray-400 text-lg hover:text-white transition-colors underline"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/metalpipe/download')({
  component: MetalPipeAppPage,
})

