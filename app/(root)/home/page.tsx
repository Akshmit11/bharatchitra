"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Gallery from "@/components/shared/Gallery"
import { Button } from "@/components/ui/button" // Add this import

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black mx-auto geist-sans">
      <section className="py-8 sm:py-10 md:py-12 px-4 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter geist-sans">
            Explore India's Rich Heritage
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-[600px] mx-auto geist-sans">
            Immerse yourself in a visual journey through India's vibrant culture and timeless history
          </p>
          <div className="flex flex-row items-center justify-center space-x-2 max-w-md mx-auto">
            <Input className="flex-1 h-10" placeholder="Search..." type="text" />
            <Select>
              <SelectTrigger className="w-[120px] h-10">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="geist-sans">
                <SelectItem value="images">Images</SelectItem>
                <SelectItem value="videos">Videos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="mt-3 sm:mt-4">Sell Digital Products</Button>
        </div>
      </section>
      <Gallery />
    </div>
  )
}