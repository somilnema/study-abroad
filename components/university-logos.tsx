"use client"

import { useState } from "react"

export function UniversityLogos() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null)

  const universities = [
    // Panel 1
    [
      { name: "Rice University", logo: "/images/rice-university.svg" },
      { name: "ETH Zürich", logo: "/images/eth-zurich.png" },
      { name: "LMU München", logo: "/images/lmu-munich.png" },
      { name: "Carnegie Mellon", logo: "/images/carnegie-mellon.png" },
      { name: "Columbia University", logo: "/images/columbia-university.png" },
      { name: "University of Göttingen", logo: "/images/university-gottingen.png" },
      { name: "NYU", logo: "/images/nyu.png" },
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
      { name: "Universidade de Lisboa", logo: "/images/university-de-lisboa.svg" },
      { name: "TU Graz", logo: "/images/tu-graz.png" },
      { name: "University of Bonn", logo: "/images/university-of-bonn.png" },
      { name: "London School of Economics", logo: "/images/london-school-of-economics.svg" },
      { name: "Korea University", logo: "/images/korea-university.png" },
      { name: "Georgia Tech", logo: "/images/georgia-tech.png" },
      { name: "University of Luxembourg", logo: "/images/university-of-luxembourg.svg" },
      { name: "University of Leoben", logo: "/images/university-of-leoben.svg" },
      { name: "Yonsei University", logo: "/images/yonsei-university.png" }
    ]
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="w-full">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Partner <span className="text-red-600">Universities</span>
          </h2>
        </div>

        <div className="space-y-12">
          {universities.map(
            (panel, panelIndex) =>
              panel.length > 0 && (
                <div
                  key={panelIndex}
                  className="overflow-hidden"
                  onMouseEnter={() => setHoveredPanel(panelIndex)}
                  onMouseLeave={() => setHoveredPanel(null)}
                >
                  <div
                    className={`flex gap-6 items-center ${
                      panelIndex === 0 ? "animate-scroll-left" : "animate-scroll-right"
                    } ${hoveredPanel === panelIndex ? "animation-paused" : ""}`}
                    style={{
                      width: `${panel.length * 220}px`,
                    }}
                  >
                    {/* Duplicate for smooth infinite scroll */}
                    {[...panel, ...panel].map((university, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center p-6 flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        style={{ width: "220px", height: "140px" }}
                      >
                        <img
                          src={university.logo || "/placeholder.svg"}
                          alt={`${university.name} logo`}
                          className="h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
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
