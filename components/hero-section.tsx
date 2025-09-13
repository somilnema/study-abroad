"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    target: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          country: "",
          target: ""
        })
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="hero-form" className="bg-white py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left side - Hero content */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 text-balance">
              Let's make your <span className="text-red-600">dream admit</span> real
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 text-pretty">
              Transform your academic aspirations into reality with expert guidance and proven strategies.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="relative">
            <Card className="bg-white shadow-2xl border-0 rounded-xl sm:rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 animate-slide-up">
              <CardHeader className="bg-red-50 border-b-2 border-red-200 px-4 sm:px-6 py-4 sm:py-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl text-black text-center font-semibold">
                  Get Your <span className="text-red-600">Shortlisting</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="text-black font-medium group-focus-within:text-red-600 transition-colors">
                        Full Name *
                      </Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your full name" 
                        className="border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 hover:border-gray-300" 
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="phone" className="text-black font-medium group-focus-within:text-red-600 transition-colors">
                        Contact Number *
                      </Label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your contact number" 
                        className="border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 hover:border-gray-300" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="text-black font-medium group-focus-within:text-red-600 transition-colors">
                        Email *
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        className="border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 hover:border-gray-300" 
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="country" className="text-black font-medium group-focus-within:text-red-600 transition-colors">
                        Choice of Country *
                      </Label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger className="border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 hover:border-gray-300">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">🇺🇸 United States</SelectItem>
                          <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                          <SelectItem value="canada">🇨🇦 Canada</SelectItem>
                          <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                          <SelectItem value="australia">🇦🇺 Australia</SelectItem>
                          <SelectItem value="singapore">🇸🇬 Singapore</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="target" className="text-black font-medium group-focus-within:text-red-600 transition-colors">
                        What's your target? *
                      </Label>
                      <Select value={formData.target} onValueChange={(value) => handleInputChange("target", value)}>
                        <SelectTrigger className="border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 hover:border-gray-300">
                          <SelectValue placeholder="Select your target degree" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masters">🎓 Masters</SelectItem>
                          <SelectItem value="bachelors">🎓 Bachelors</SelectItem>
                          <SelectItem value="diploma">📜 Diploma</SelectItem>
                          <SelectItem value="phd">👨‍🎓 PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                      ✅ Form submitted successfully! We'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
                      ❌ Something went wrong. Please try again.
                    </div>
                  )}

                  <div className="text-center pt-2 sm:pt-4">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        "Get My Shortlisting"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Decorative shadow elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-50 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>

    
    </section>
  )
}
