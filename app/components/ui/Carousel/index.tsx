'use client'
import React, { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useCarousel } from './hooks/useCarousel'

const Carousel = () => {
  const slideRef = useRef(null)
  const [handlePrev, handleNext] = useCarousel(1, slideRef, 12)
  const totalSlides = 10
  const slides = [
    totalSlides - 1,
    ...Array(totalSlides).keys(),
    0, 
  ]
  return (
    <div className="carousel-container relative flex h-full">
      <button
        className="carousel-btn-prev absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white bg-gray-500/30 z-10"
        onClick={handlePrev}
      >
        <IoIosArrowBack size={24} />
      </button>

      <div className="carousel-img-container flex-1 overflow-hidden">
        <div
          className="flex  h-full w-full transition-transform ease-in-out duration-500"
          ref={slideRef}
        >
          {
          
          slides.map((index) => (
            <img
              className="w-full h-full flex-shrink-0"
              key={index}
              src={`/images/carousel/${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        className="carousel-btn-next absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white bg-gray-500/30 z-10"
        onClick={handleNext}
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  )
}

export default Carousel
