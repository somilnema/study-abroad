"use client"

import { GraduationCap, Target, Lightbulb } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    highlight: "Personalized",
    title: "Profile Analysis",
    description:
      "Find your strengths, areas to improve, & what's needed for a strong application.",
  },
  {
    icon: Target,
    highlight: "Best-Fit College",
    title: "Recommendations",
    description: "Discover the universities that suit your profile and goals.",
  },
  {
    icon: Lightbulb,
    highlight: "Proven Tips",
    title: "for a Dream Admit",
    description: "Learn insider tips and strategies to boost your chances.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight">
            What to <span className="text-red-600">Expect</span> from Your Free Consultation
          </h2>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon in red circle bg */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center rounded-lg sm:rounded-xl bg-red-50 text-red-600">
                <feature.icon size={22} className="sm:w-6 sm:h-6" />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                <span className="text-red-600">{feature.highlight}</span>{" "}
                <span className="text-black">{feature.title}</span>
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
