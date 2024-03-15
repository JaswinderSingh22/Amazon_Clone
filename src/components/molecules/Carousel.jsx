import React, { useState } from "react";
import Image from "next/image";
export default function Carousel({ carouselImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative flex w-full h-[50vh] justify-between items-center">
      <button
        className="prev absolute z-10 h-full bg-transparent hover:outline w-10"
        onClick={goToPrev}
      >
        &#10094;
      </button>
      <div className="carousel-slide flex flex-1 overflow-hidden justify-center">
        {carouselImages &&
          carouselImages.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <Image
                src={image.path}
                alt={`Slide ${index}`}
                width={100}
                height={100}
              />
            </div>
          ))}
      </div>
      <button
        className="next absolute right-0 z-10 h-full bg-transparent hover:outline w-10"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
}
