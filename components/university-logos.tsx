"use client"

import { useState, useMemo, useEffect } from "react"

export function UniversityLogos() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null)
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile')
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  const universities = [
    // Panel 1
    [
      { name: "Rice University", logo: "/images/rice-university.svg" },
      { name: "ETH Zürich", logo: "/images/eth-zurich.png" },
      { name: "LMU München", logo: "/images/lmu-munich.png" },
      { name: "Carnegie Mellon", logo: "/images/carnegie-mellon.png" },
      { name: "Columbia University", logo: "/images/columbia-university.png" },
      { name: "University of Göttingen", logo: "/images/university-gottingen.png" },
      { name: "NYU", logo: "/images/nyu.webp" },
      { name: "RWTH Aachen", logo: "/images/rwth-aachen.png" },
      { name: "Cornell University", logo: "/images/cornell-university.png" },
      { name: "TUM", logo: "/images/tum-logo.svg" },
      { name: "TUHH Hamburg", logo: "/images/tuhh-hamburg.png" },
      { name: "TU Berlin", logo: "/images/tu-berlin.svg" }
    ],
    // Panel 2
    [
      { name: "Imperial College London", logo: "/images/imperial-college-london.png" },
      { name: "University of Seoul", logo: "/images/university-of-seoul.jpeg" },
      { name: "University of Birmingham", logo: "/images/university-of-birmingham.svg" },
      { name: "Universidade de Lisboa", logo: "/images/neues-fau.png" },
      { name: "TU Graz", logo: "/images/tu-graz.png" },
      { name: "University of Bonn", logo: "/images/university-of-bonn.png" },
      { name: "London School of Economics", logo: "/images/london-school-of-economics.svg" },
      { name: "Korea University", logo: "/images/korea-university.png" },
      { name: "Georgia Tech", logo: "/images/georgia-tech.png" },
      { name: "University of Luxembourg", logo: "/images/university-of-luxembourg.svg" },
      { name: "University of Leoben", logo: "/images/university-of-leoben.svg" },
      { name: "Yonsei University", logo: "/images/Wosong.png" }
    ]
  ]

  // Memoize the duplicated panels for better performance
  const duplicatedPanels = useMemo(() => {
    return universities.map(panel => [...panel, ...panel, ...panel, ...panel]) // Triple for seamless loop
  }, [universities])

  // Get responsive dimensions
  const getDimensions = () => {
    switch (screenSize) {
      case 'mobile':
        return { width: 180, height: 120, gap: 3 }
      case 'tablet':
        return { width: 200, height: 130, gap: 4 }
      default:
        return { width: 220, height: 140, gap: 6 }
    }
  }

  const dimensions = getDimensions()

  return (
    <section id="universities" className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-3 sm:px-4 lg:px-6 xl:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
            Partner <span className="text-red-600">Universities</span>
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {duplicatedPanels.map(
            (panel, panelIndex) =>
              panel.length > 0 && (
                <div
                  key={panelIndex}
                  className="overflow-hidden"
                  onMouseEnter={() => setHoveredPanel(panelIndex)}
                  onMouseLeave={() => setHoveredPanel(null)}
                >
                  <div
                    className={`flex items-center ${
                      panelIndex === 0 ? "animate-scroll-left" : "animate-scroll-right"
                    } ${hoveredPanel === panelIndex ? "animation-paused" : ""}`}
                    style={{
                      width: `${panel.length * dimensions.width}px`,
                      gap: `${dimensions.gap * 0.25}rem`,
                    }}
                  >
                    {panel.map((university, index) => (
                      <div
                        key={`${panelIndex}-${index}`}
                        className="flex justify-center items-center flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        style={{ 
                          width: `${dimensions.width}px`, 
                          height: `${dimensions.height}px`,
                          padding: `${dimensions.gap * 0.25}rem`,
                        }}
                      >
                        <img
                          src={university.logo || "/placeholder.svg"}
                          alt={`${university.name} logo`}
                          className="w-auto object-contain transition-all duration-300 hover:scale-105"
                          style={{ height: `${dimensions.height * 0.6}px` }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  )
}
