import React from "react";
import { galleryImages } from "@/constants";
import { Button } from "@/components/ui/button";

const Gallery: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 geist-sans">
      <h2 className="text-3xl font-bold tracking-tighter mb-8 px-4 md:px-6 max-w-7xl mx-auto">Gallery</h2>
      
      {/* gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${
              image.ratio === "4:5" || image.ratio === "3:4"
                ? "row-span-2"
                : ""
            }`}
          >
            <img
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* See More button */}
      <div className="mt-8 flex justify-center">
        <Button variant="outline" size="lg">
          See More
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
