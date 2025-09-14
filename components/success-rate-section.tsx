"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const successData = [
  { university: "", logo: "/images/columbia-university.png", before: "4.28%", after: "26.8%", multiplier: "6x" },
  { university: "", logo: "/images/tum-logo.svg", before: "8%", after: "88%", multiplier: "11x" },
  { university: "", logo: "/images/rwth-aachen.png", before: "6%", after: "98%", multiplier: "16x" },
  { university: "", logo: "/images/university-of-seoul.jpeg", before: "15%", after: "88%", multiplier: "6x" },
  { university: "", logo: "/images/neues-fau.png", before: "6%", after: "22%", multiplier: "4x" },
  { university: "", logo: "/images/university-of-bonn.png", before: "14%", after: "31%", multiplier: "2x" },
  { university: "", logo: "/images/imperial-college-london.png", before: "12%", after: "28%", multiplier: "2x" },
  { university: "", logo: "/images/london-school-of-economics.svg", before: "8%", after: "24%", multiplier: "3x" },
  { university: "", logo: "/images/university-of-birmingham.svg", before: "13%", after: "29%", multiplier: "2x" },
  { university: "", logo: "/images/university-of-leoben.svg", before: "15%", after: "35%", multiplier: "2x" },
  { university: "", logo: "/images/university-of-luxembourg.svg", before: "12%", after: "33%", multiplier: "3x" },
  { university: "", logo: "/images/georgia-tech.png", before: "17%", after: "36%", multiplier: "2x" },
]

// Success Card Component
const SuccessCard = ({ item, index }: { item: any, index: number }) => (
  <div
    key={index}
    className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg w-[160px] sm:w-[200px] lg:w-[240px] h-[240px] sm:h-[260px] lg:h-[280px] flex-shrink-0 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover:scale-[1.02] mx-1"
  >
    {/* Top: Centered Logo */}
    <div className="flex justify-center mb-2 sm:mb-3">
      <img
        src={item.logo || "/placeholder.svg"}
        alt={`${item.university} logo`}
        className="h-6 sm:h-8 lg:h-10 w-auto object-contain opacity-90"
        loading="lazy"
        decoding="async"
      />
    </div>

    {/* Center: Big Multiplier */}
    <div className="text-center mb-2 sm:mb-3">
      <span className="text-red-600 font-bold text-lg sm:text-xl lg:text-2xl block mb-1">
        {item.multiplier}
      </span>
      <p className="text-xs text-gray-600 font-medium">Chances</p>
    </div>

    {/* Bottom: Rates */}
    <div className="flex justify-between text-center mt-auto">
      <div className="flex-1 px-0.5">
        <p className="text-sm sm:text-base font-bold text-gray-700 mb-1">{item.before}</p>
        <p className="text-xs text-gray-500 leading-tight">
          General student <br /> Admissions Rate
        </p>
      </div>
      <div className="flex-1 px-0.5">
        <p className="text-sm sm:text-base font-bold text-green-600 mb-1">{item.after}</p>
        <p className="text-xs text-gray-500 leading-tight">
          Our Students <br /> Admissions Rate
        </p>
      </div>
    </div>
  </div>
)

export function SuccessRateSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [viewportWidth, setViewportWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Update viewport width and cards per view
  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth
      setViewportWidth(width)
      
      if (width < 640) {
        setCardsPerView(2) // Show 2 cards on mobile
      } else if (width < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, successData.length - cardsPerView) : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= successData.length - cardsPerView ? 0 : prevIndex + 1
    )
  }

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 2000)// Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [currentIndex, cardsPerView])

  const maxIndex = Math.max(0, successData.length - cardsPerView)

  return (
    <section id="success-rates" className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            The Right Guidance Makes All the Difference.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our students have a proven track record of securing admits at top universities worldwide.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-1.5 sm:p-2 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
            aria-label="Previous cards"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-1.5 sm:p-2 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex >= maxIndex}
            aria-label="Next cards"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden px-4 sm:px-8 lg:px-12">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {successData.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="flex justify-center">
                    <SuccessCard item={item} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-3 sm:mt-4 space-x-1.5 sm:space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-red-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}