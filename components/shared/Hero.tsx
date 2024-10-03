import React from 'react'
import { Button } from "@/components/ui/button"

const Hero: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 geist-sans">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Digital Products for Modern Creators
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Elevate your digital presence with our curated collection of premium digital products.
              </p>
            </div>
            <div className="mt-4">
              <Button className="w-full sm:w-auto">
                Sell Digital Products
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Hero"
              className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="https://placehold.co/533x400"
              width="533"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero