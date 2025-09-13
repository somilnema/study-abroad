"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Sparkles, Quote } from "lucide-react"

const stories = [
  {
    name: "Sahil Kale",
    university: "RWTH Aachen",
    program: "Full-Time MBA in Digitalization and Industrial Change",
    story: "I always thought my tech background might hold me back in MBA admissions. With their help, I learned how to position my skills as an asset—and that changed everything.",
    image: "/testimonial/Sahil (1).png",
    logo: "/images/rwth-aachen.png",
    
    help: [
      "Highlighted his tech-to-business transition with real-world projects.",
      "Strengthened leadership narrative with industry-focused case studies.",
      "Refined MBA essays to align with RWTH's innovation-driven curriculum.",
    ],
  },
  {
    name: "Palak J",
    university: "Cornell University",
    program: "Master of Health Administration",
    story: "Cornell always felt out of reach. Their team helped me build a profile that reflected both my academic strength and my passion for healthcare leadership.",
    image: "/asian-female-student-portrait.jpg",
    logo: "/images/columbia-university.png",
    help: [
      "Showcased healthcare volunteering to demonstrate impact.",
      "Connected past academic work to future goals in public health.",
      "Guided scholarship essays with a strong purpose-driven angle.",
    ],
  },
  {
    name: "Pearika C",
    university: "Columbia University",
    program: "MSc in Actuarial Science",
    story: "Columbia's actuarial program is highly selective. With expert guidance, I could show my analytical edge while still keeping my essays personal and authentic.",
    image: "/caucasian-female-student-portrait.jpg",
    logo: "/images/columbia-university.png",
    help: [
      "Strengthened quantitative profile with specialized coursework.",
      "Framed internships as risk-management experiences.",
      "Crafted a clear career roadmap in financial consulting.",
    ],
  },
  {
    name: "Arjun A",
    university: "FAU Erlangen-Nürnberg",
    program: "MS in Data Science",
    story: "I didn't know how to bridge my academic record with industry demands. Their approach gave my application the practical edge it needed.",
    image: "/testimonial/Arjun A.png",
    logo: "/images/neues-fau.png",
    help: [
      "Added research-based projects to showcase technical expertise.",
      "Recommended MOOCs to cover gaps in advanced statistics.",
      "Created a strong portfolio linking academic theory with real data applications.",
    ],
  },
  {
    name: "Pankaj P",
    university: "Tampere University of Applied Sciences",
    program: "Diploma in Systemic Approach to Entrepreneurship",
    story: "I thought my unconventional background would be a barrier. Instead, it became my biggest strength after they helped me reframe it strategically.",
    image: "/testimonial/Pankaj (1).png",
    logo: "/logos/tampere-university.png",
    help: [
      "Positioned his entrepreneurial experiments as learning milestones.",
      "Built narrative around resilience and innovative problem-solving.",
      "Simplified academic documents for smooth international admission.",
    ],
  },
  {
    name: "Naman M",
    university: "Georgia Tech",
    program: "Quantitative and Computational Finance",
    story: "For a program as competitive as Georgia Tech, clarity was key. They made sure my application reflected precision, focus, and ambition.",
    image: "/testimonial/Naman.png",
    logo: "/images/georgia-tech.png",
    help: [
      "Showcased rigorous math and programming skills with projects.",
      "Connected past internships to finance industry goals.",
      "Crafted a forward-looking SOP around financial innovation.",
    ],
  },
  {
    name: "Nikhil B",
    university: "Deggendorf Institute of Technology",
    program: "MSc in High-Performance & Quantum Computing",
    story: "I always thought my profile was too niche. Their team helped me show that niche as a unique advantage for my dream program.",
    image: "/testimonial/Nikhil B.png",
    logo: "/logos/deggendorf-university.png",
    help: [
      "Highlighted advanced computing projects to stand out.",
      "Strengthened profile with published research recommendations.",
      "Positioned career goals within Europe's growing quantum-tech ecosystem.",
    ],
  },
]

export function StudentStoriesHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    const handleResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Memoize expensive calculations
  const { cardWidth, cardHeight, gap, totalContentWidth, totalScrollWidth } = useMemo(() => {
    const cardWidth = 550
    const cardHeight = 600
    const gap = 40
    const totalContentWidth = stories.length * (cardWidth + gap) - gap
    const totalScrollWidth = Math.max(totalContentWidth - viewportWidth + 100, 0)
    
    return { cardWidth, cardHeight, gap, totalContentWidth, totalScrollWidth }
  }, [viewportWidth])

  // Use a slower but complete scroll - ensure all cards are visible
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalScrollWidth])

  return (
    <section id="success-stories" ref={targetRef} className="relative h-[600vh]">
      {/* Sticky container with proper spacing for heading */}
        <div className="sticky top-0 flex h-screen items-start overflow-hidden pt-10 pb-2">
          <div className="w-full">
            {/* Tagline */}
            <div className="text-center mb-6 px-8">
              <h2 className="text-xl md:text-3xl font-bold text-black text-balance leading-tight">
                From <span className="text-red-600">Applications</span> to <span className="text-red-600">Admits</span> — See How Our Students Succeeded with Expert Support.
              </h2>
            </div>
            
            <motion.div 
              style={{ x, willChange: 'transform' }} 
              className="flex space-x-10 pl-8"
            >
          {stories.map((story, index) => (
            <Card
              key={index}
              className="relative rounded-2xl shadow-lg bg-white flex-shrink-0 overflow-hidden"
              style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
            >
              <div className="p-6 h-full flex flex-col bg-white relative">
                {/* Header */}
                <div className="flex justify-between items-start mb-5">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-700 mb-2">{story.name}</h3>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed pr-4">
                      {story.program}
                    </p>
                  </div>
                  <img
                    src={story.logo}
                    alt={`${story.university} logo`}
                    className="h-14 object-contain flex-shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* How We Helped */}
                <div className="mb-5 flex-1">
                  <h4 className="text-black font-semibold mb-3 text-lg">How We Helped:</h4>
                  <ul className="space-y-3">
                    {story.help.map((point, i) => (
                      <li key={i} className="flex items-start text-base text-gray-700 leading-relaxed">
                        <Sparkles className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <div className="relative text-gray-700 text-base leading-relaxed pr-56 mt-auto">
                  <Quote className="h-8 w-8 text-red-600 inline-block mr-3 mb-1" />
                  <span className="italic">{story.story}</span>
                </div>
              </div>

              {/* Red corner background */}
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-600" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'}}></div>
              
{/* Student photo */}
<div className="absolute bottom-0 right-0 z-20 
                w-44 h-60
                md:w-56 md:h-76 
                lg:w- lg:h-">
  <img
    src={story.image}
    alt={story.name}
    className="w-full h-full object-contain"  // keeps full image visible
    loading="lazy"
    decoding="async"
  />
</div>

            </Card>
          ))}
          </motion.div>
          </div>
        </div>
      

    </section>
  )
}