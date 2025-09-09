"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const successData = [
  { university: "", logo: "/images/columbia-university.png", before: "4.28%", after: "26.8%", multiplier: "6x" },
  { university: "", logo: "/images/tum-logo.svg", before: "8%", after: "88%", multiplier: "11x" },
  { university: "", logo: "/images/rwth-aachen.png", before: "6%", after: "98%", multiplier: "16x" },
  { university: "", logo: "/images/university-of-seoul.jpeg", before: "15%", after: "88%", multiplier: "6x" },
  { university: "", logo: "/images/yonsei-university.png", before: "6%", after: "22%", multiplier: "4x" },
  { university: "", logo: "/images/university-of-bonn.png", before: "14%", after: "31%", multiplier: "2x" },
  { university: "", logo: "/images/imperial-college-london.png", before: "12%", after: "28%", multiplier: "2x" },
  { university: "", logo: "/images/london-school-of-economics.svg", before: "8%", after: "24%", multiplier: "3x" },
  { university: "", logo: "/images/university-of-birmingham.svg", before: "13%", after: "29%", multiplier: "2x" },
  { university: "", logo: "/images/university-of-leoben.svg", before: "15%", after: "35%", multiplier: "2x" },
  { university: "", logo: "/images/university-of-luxembourg.svg", before: "12%", after: "33%", multiplier: "3x" },
  { university: "", logo: "/images/georgia-tech.png", before: "17%", after: "36%", multiplier: "2x" },
]

export function SuccessRateSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const [viewportWidth, setViewportWidth] = useState(0)
  const [totalScrollWidth, setTotalScrollWidth] = useState(0)

  // Track viewport width
  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth)
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Measure actual content width dynamically
  useEffect(() => {
    const calculateScrollWidth = () => {
      if (containerRef.current && viewportWidth > 0) {
        // Get the actual scroll width of the content
        const contentWidth = containerRef.current.scrollWidth

        // Simple calculation: scroll the full content width minus viewport width
        // This ensures we show all content without blank space
        const scrollDistance = contentWidth - viewportWidth

        setTotalScrollWidth(Math.max(scrollDistance, 200))
      }
    }

    // Calculate immediately and on resize
    calculateScrollWidth()
    const timeoutId = setTimeout(calculateScrollWidth, 100)
    return () => clearTimeout(timeoutId)
  }, [viewportWidth, successData.length])

  // Map scroll progress to horizontal motion
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalScrollWidth])

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-white">
      {/* Guidance text at the top */}
      <div className="absolute top-16 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Right Guidance Makes All the Difference.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our students have a proven track record of securing admits at top universities worldwide.
            </p>
          </div>
        </div>
      </div>
      
      {/* Sticky container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex space-x-6 pl-10 pr-20"
        >
          {successData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-lg w-[330px] h-[400px] flex-shrink-0 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 hover:scale-[1.02]"
            >
              {/* Top: Centered Logo */}
              <div className="flex justify-center mb-8">
                <img
                  src={item.logo || "/placeholder.svg"}
                  alt={`${item.university} logo`}
                  className="h-16 w-auto object-contain opacity-90"
                />
              </div>

              {/* Center: Big Multiplier */}
              <div className="text-center mb-10">
                <span className="text-red-600 font-bold text-5xl block mb-3">
                  {item.multiplier}
                </span>
                <p className="text-base text-gray-600 font-medium">Chances</p>
              </div>

              {/* Bottom: Rates */}
              <div className="flex justify-between text-center mt-auto">
                <div className="flex-1 px-2">
                  <p className="text-3xl font-bold text-gray-700 mb-3">{item.before}</p>
                  <p className="text-xs text-gray-500 leading-tight">
                    General student <br /> Admissions Rate
                  </p>
                </div>
                <div className="flex-1 px-2">
                  <p className="text-3xl font-bold text-green-600 mb-3">{item.after}</p>
                  <p className="text-xs text-gray-500 leading-tight">
                    Our Students <br /> Admissions Rate
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        </div>
      </section>
    
    
  )
}