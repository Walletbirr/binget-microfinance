'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion";


export default function Carousel({ items }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const slider = instanceRef.current
    if (!slider) return

    const cleanup = slider.on('slideChanged', () => {
      setCurrentSlide(slider.track.details.rel)
    })

    const interval = setInterval(() => {
      slider.next()
    }, 5000) // Change slide every 5 seconds

    return () => {
      clearInterval(interval)
      cleanup?.()
    }
  }, [instanceRef])

  return (
    <div className="relative w-screen">
      <div ref={sliderRef} className="keen-slider h-screen w-screen">
        {items.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center justify-center bg-white shadow-lg text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-screen object-cover"
            />
            <div className='absolute h-full w-full justify-left content-center text-left p-[100px]'>
              <motion.h1
                className=" mb-2 left-[100px]"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{ color: 'white', fontSize: 60, fontWeight: 'bold' }}
              >
                {item.title}
              </motion.h1>
              <motion.div
                className=" text-gray-600 top-100 left-[100px] text-left"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{ color: 'white', width: '50%', fontSize: 20 }}
              >
                {item.description}
              </motion.div>
            </div>


          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
