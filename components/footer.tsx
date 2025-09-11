"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight,  } from "lucide-react"

export function Footer() {
  const scrollToForm = () => {
    const heroSection = document.getElementById('hero-form')
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Transform Your <span className="text-red-600">Academic Dreams</span> Into Reality
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Join thousands of successful students who have achieved their dream admits at top universities worldwide. 
              Our expert guidance and proven strategies will help you stand out in the competitive admission process.
            </p>
            
            {/* CTA Button */}
            <Button 
              onClick={scrollToForm}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
            >
              Join Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero-form" onClick={scrollToForm} className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#universities" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Partner Universities
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#success-rates" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Success Rates
                </a>
              </li>
            </ul>
          </div>

          
            </div>
          </div>
    </footer>
  )
}
