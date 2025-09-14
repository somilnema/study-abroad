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
    name: "Pearika C",
    university: "Columbia University",
    program: "MSc in Actuarial Science",
    story: "Columbia's actuarial program is highly selective. With expert guidance, I could show my analytical edge while still keeping my essays personal and authentic.",
    image: "/testimonial/Pearika.png",
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
    image: "/testimonial/Pankaj P.png",
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
    classname: "scale-x-[-1]",
    help: [
      "Highlighted advanced computing projects to stand out.",
      "Strengthened profile with published research recommendations.",
      "Positioned career goals within Europe's growing quantum-tech ecosystem.",
    ],
  },
  {
    name: "Mona M",
    university: "Northeastern University",
    program: "MS in Artificial Intelligence",
    story: "I knew AI is competitive, and I wasn't sure my profile stood out. Their guidance helped me connect my technical strengths with my vision for the future—making my application not just strong, but unique.",
    image: "/testimonial/Mona.png",
    logo: "/images/nyu.png",
    help: [
      "Showcased her strong math and coding foundation through AI-focused academic and personal projects.",
      "Built a compelling story around her passion for using AI in real-world problem solving.",
      "Strengthened her SOP and LORs to align with Northeastern's research-driven and application-oriented AI program.",
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

  // Memoize expensive calculations with responsive dimensions
  const { cardWidth, cardHeight, gap, totalContentWidth, totalScrollWidth, sectionHeight } = useMemo(() => {
    // Responsive card dimensions
    const isMobile = viewportWidth < 640
    const isTablet = viewportWidth < 1024
    
    const cardWidth = isMobile ? 300 : isTablet ? 380 : 480
    const cardHeight = isMobile ? 500 : isTablet ? 450 : 550
    const gap = isMobile ? 16 : isTablet ? 24 : 32
    const sectionHeight = isMobile ? 180 : isTablet ? 350 : 500
    const totalContentWidth = stories.length * (cardWidth + gap) - gap
    const totalScrollWidth = Math.max(totalContentWidth - viewportWidth + (isMobile ? 20 : 100), 0)
    
    return { cardWidth, cardHeight, gap, totalContentWidth, totalScrollWidth, sectionHeight }
  }, [viewportWidth])

  // Use a slower but complete scroll - ensure all cards are visible
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalScrollWidth])

  return (
    <section id="success-stories" ref={targetRef} className="relative" style={{ height: `${sectionHeight}vh` }}>
      {/* Sticky container with proper spacing for heading */}
      <div className="sticky top-0 flex items-start overflow-hidden pt-1 sm:pt-2 md:pt-3" style={{ height: `${viewportWidth < 640 ? Math.max(cardHeight + 40, 450) : Math.max(cardHeight + 80, 500)}px`, paddingBottom: `${viewportWidth < 640 ? '0px' : '4px'}` }}>
        <div className="w-full">
          {/* Tagline */}
          <div className="text-center mb-1 sm:mb-2 px-4 sm:px-6 lg:px-8" style={{ marginBottom: `${viewportWidth < 640 ? '4px' : '8px'}` }}>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black text-balance leading-tight">
              From <span className="text-red-600">Applications</span> to <span className="text-red-600">Admits</span> — See How Our Students Succeeded with Expert Support.
            </h2>
          </div>
          
          <motion.div 
            style={{ x, willChange: 'transform', gap: `${gap}px` }} 
            className="flex pl-4 sm:pl-6 lg:pl-8"
          >
            {stories.map((story, index) => (
              <Card
                key={index}
                className="relative rounded-xl sm:rounded-2xl shadow-lg bg-white flex-shrink-0 overflow-hidden"
                style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
              >
                <div className="h-full flex flex-col bg-white relative" style={{ padding: `${viewportWidth < 640 ? Math.max(cardWidth * 0.01, 4) : Math.max(cardWidth * 0.015, 8)}px` }}>
                  {/* Header */}
                  <div className="flex justify-between items-start" style={{ marginBottom: `${viewportWidth < 640 ? Math.max(cardHeight * 0.01, 4) : Math.max(cardHeight * 0.015, 8)}px` }}>
                    <div className="flex-1 pr-2">
                      <h3 className="font-bold text-red-700" style={{ 
                        fontSize: `${Math.max(cardWidth * 0.042, 14)}px`,
                        marginBottom: `${Math.max(cardHeight * 0.01, 4)}px`
                      }}>{story.name}</h3>
                      <p className="text-gray-700 font-medium leading-relaxed" style={{ 
                        fontSize: `${Math.max(cardWidth * 0.035, 10)}px`
                      }}>
                        {story.program}
                      </p>
                    </div>
                    <div className="flex-shrink-0" style={{ 
                      width: `${Math.max(cardWidth * 0.25, 60)}px`,
                      height: `${Math.max(cardHeight * 0.12, 40)}px`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={story.logo}
                        alt={`${story.university} logo`}
                        className="object-contain max-w-full max-h-full"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* How We Helped */}
                  <div className="flex-1" style={{ marginBottom: `${viewportWidth < 640 ? Math.max(cardHeight * 0.01, 4) : Math.max(cardHeight * 0.015, 8)}px` }}>
                    <h4 className="text-black font-semibold" style={{ 
                      fontSize: `${Math.max(cardWidth * 0.04, 12)}px`,
                      marginBottom: `${Math.max(cardHeight * 0.015, 8)}px`
                    }}>How We Helped:</h4>
                    <ul style={{ gap: `${Math.max(cardHeight * 0.01, 6)}px` }} className="flex flex-col">
                      {story.help.map((point, i) => (
                        <li key={i} className="flex items-start text-gray-700 leading-relaxed" style={{ 
                          fontSize: `${Math.max(cardWidth * 0.032, 10)}px`
                        }}>
                          <Sparkles className="text-red-600 mt-1 flex-shrink-0" style={{ 
                            height: `${Math.max(cardWidth * 0.04, 12)}px`,
                            width: `${Math.max(cardWidth * 0.04, 12)}px`,
                            marginRight: `${Math.max(cardWidth * 0.02, 6)}px`
                          }} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="relative text-gray-700 leading-relaxed mt-auto" style={{ 
                    fontSize: `${Math.max(cardWidth * 0.03, 10)}px`,
                    paddingRight: `${Math.max(cardWidth * 0.35, 70)}px`
                  }}>
                    <Quote className="text-red-600 inline-block mb-1" style={{ 
                      height: `${Math.max(cardWidth * 0.05, 16)}px`,
                      width: `${Math.max(cardWidth * 0.05, 16)}px`,
                      marginRight: `${Math.max(cardWidth * 0.02, 6)}px`
                    }} />
                    <span className="italic">{story.story}</span>
                  </div>
                </div>

                {/* Red corner background */}
                <div className="absolute bottom-0 right-0 bg-red-600" style={{
                  width: `${Math.max(cardWidth * 0.4, 80)}px`,
                  height: `${Math.max(cardHeight * 0.4, 80)}px`,
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                }}></div>
                
                {/* Student photo */}
                <div className={`absolute bottom-0 right-0 z-20 ${story.classname || ""}`} style={{
                  width: `${Math.max(cardWidth * 0.35, 140)}px`,
                  height: `${Math.max(cardHeight * 0.5, 100)}px`,
                  overflow: "hidden",
                  justifyContent: "center"
                }}>
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover object-bottom"
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