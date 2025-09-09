"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const features = [
  {
    title: "Expert Guidance",
    description: "Get personalized advice from experienced counselors who understand the admission process.",
    color: "from-blue-500 to-cyan-500",
    hoverColor: "from-blue-600 to-cyan-600",
  },
  {
    title: "Proven Track Record",
    description: "Our students have successfully gained admission to top universities worldwide.",
    color: "from-green-500 to-emerald-500",
    hoverColor: "from-green-600 to-emerald-600",
  },
  {
    title: "Comprehensive Support",
    description: "From application to visa, we support you through every step of your journey.",
    color: "from-purple-500 to-violet-500",
    hoverColor: "from-purple-600 to-violet-600",
  },
  {
    title: "Global Network",
    description: "Access our extensive network of partner universities and institutions.",
    color: "from-orange-500 to-red-500",
    hoverColor: "from-orange-600 to-red-600",
  },
]

export function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in">
            Why <span className="text-red-600">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            Discover what makes us the preferred choice for students worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`
                bg-white shadow-xl border-10 rounded-2xl overflow-hidden
                transform transition-all duration-500 ease-out
                hover:scale-105 hover:shadow-2xl
                animate-slide-up
                ${hoveredCard === index ? 'ring-4 ring-red-200' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-8 text-center relative">
                {/* Content */}
                <h3 className="text-2xl font-bold text-black mb-6 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed transition-all duration-300">
                  {feature.description}
                </p>
              </CardContent>

              {/* Hover overlay effect */}
              <div className={`
                absolute inset-0 bg-red-50/50 
                opacity-0 transition-opacity duration-300 pointer-events-none
                ${hoveredCard === index ? 'opacity-100' : ''}
              `}></div>
            </Card>
          ))}

          </div>
        </div>   
    </section>
    )
    }
  