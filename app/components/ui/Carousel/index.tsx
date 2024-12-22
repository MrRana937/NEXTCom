'use client'
import React, { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useCarousel } from './hooks/useCarousel'
import { offersArray } from '@/app/data/homedata'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai' 


interface CarouselProps
{
multiItem:boolean
}


const Carousel = ({multiItem}:CarouselProps) => {
  const slideRef = useRef(null)
    const totalSlides = 10
    const itemsPerSlide = 3
     const effectiveItemsPerSlide = Math.min(itemsPerSlide, offersArray.length);
  const [handlePrev, handleNext] = useCarousel({
  index:multiItem?0:1,
  ref:slideRef,
  totalSlides:multiItem?9:12,
  multiItem,
  itemsPerSlide
})

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
          {multiItem
            ? offersArray.map((slide, index) => (
                <div
                  key={`card-${index}`}
                  className="product-card flex-shrink-0 mx-2 my-1 h-[90%]"
                  style={{
                    width: `calc(${100 / effectiveItemsPerSlide}% - 16px)`,
                  }}
                >
                  <div className="relative group h-full">
                    <div className="relative overflow-hidden rounded-lg h-full">
                      <img
                        src={slide.image}
                        alt={'Product ' + index}
                        className="w-full h-[200px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
                        <span
                          className="flex items-center justify-center bg-[#fac805] text-white 
                                    w-[6.2rem] h-[1.9rem] rounded-[1.25rem] font-bold"
                        >
                          ${slide.price}
                        </span>
                      </div>
                      <div className="absolute top-1 right-1 z-10">
                        <span
                          className="flex items-center justify-center bg-[#f15f6f] text-white 
                                      w-[2.6rem] h-[2.6rem] rounded-full font-semibold"
                        >
                          -{slide.discount}%
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-white text-gray-800 p-2 rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                          <FiShoppingCart size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : slides.map((index) => (
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
