"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/scroll-animations"

// Testimonial data
const testimonials = [
  {
    id: 1,
    content:
      "Shardul is an exceptional developer who delivered our cloud infrastructure project ahead of schedule. His technical expertise and problem-solving abilities are outstanding. He communicated clearly throughout the project and was always available to address our concerns.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc.",
    image: "/confident-professional.png",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Working with Shardul was a game-changer for our startup. He quickly understood our requirements and implemented a scalable architecture that has supported our growth. His knowledge of AWS and containerization saved us countless hours and resources.",
    author: "Michael Chen",
    position: "Founder",
    company: "DataFlow Systems",
    image: "/confident-businessman.png",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Shardul's full-stack development skills are truly impressive. He revamped our legacy application with modern technologies, improving performance by over 40%. His attention to detail and commitment to best practices resulted in clean, maintainable code that our team loves working with.",
    author: "Priya Patel",
    position: "Product Manager",
    company: "InnovateX",
    image: "/confident-indian-architect.png",
    rating: 5,
  },
  {
    id: 4,
    content:
      "I've worked with many developers, but Shardul stands out for his ability to translate complex technical concepts into simple terms. He not only delivered an excellent product but also educated our team throughout the process, enabling us to maintain and extend the solution ourselves.",
    author: "David Wilson",
    position: "Director of Engineering",
    company: "CloudSphere",
    image: "/thoughtful-bearded-professional.png",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (inView) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [inView])

  // Navigation functions
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gunmetal-900 dark:to-blue-950 opacity-80 dark:opacity-40 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sky-200 dark:bg-sky-900/20 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-blue-200 dark:bg-blue-900/20 opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800 dark:text-white">Client Testimonials</h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-700 dark:from-sky-400 dark:to-blue-600 bg-clip-text text-transparent">
              What People Say
            </h3>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Large quote marks */}
          <div className="flex justify-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16 text-sky-200 dark:text-sky-900/40"
              fill="currentColor"
            >
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.406.7-.754 1.19-1.045.44-.25.95-.44 1.53-.57.66-.133 1.19-.196 1.59-.196.88 0 1.69.22 2.42.66.73.44 1.3 1.05 1.71 1.83.41.78.62 1.68.62 2.7 0 1.15-.26 2.19-.78 3.11-.52.93-1.25 1.66-2.19 2.2-.94.53-2.03.8-3.26.8-1.17 0-2.23-.25-3.17-.75-.93-.5-1.68-1.17-2.24-2.02-.56-.85-.83-1.83-.83-2.94h2.24c0 .63.18 1.17.54 1.62.36.45.84.8 1.44 1.04.6.24 1.28.36 2.04.36.76 0 1.45-.13 2.05-.38.6-.25 1.08-.62 1.43-1.1.35-.48.52-1.06.52-1.73zM22.5 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.406.7-.754 1.19-1.045.44-.25.95-.44 1.53-.57.66-.133 1.19-.196 1.59-.196.88 0 1.69.22 2.42.66.73.44 1.3 1.05 1.71 1.83.41.78.62 1.68.62 2.7 0 1.15-.26 2.19-.78 3.11-.52.93-1.25 1.66-2.19 2.2-.94.53-2.03.8-3.26.8-1.17 0-2.23-.25-3.17-.75-.93-.5-1.68-1.17-2.24-2.02-.56-.85-.83-1.83-.83-2.94h2.24c0 .63.18 1.17.54 1.62.36.45.84.8 1.44 1.04.6.24 1.28.36 2.04.36.76 0 1.45-.13 2.05-.38.6-.25 1.08-.62 1.43-1.1.35-.48.52-1.06.52-1.73z" />
            </svg>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <FadeIn
                  key={testimonial.id}
                  fullWidth
                  className="w-full"
                  delay={0}
                  direction={currentIndex === index ? "up" : null}
                >
                  <div
                    style={{
                      display: currentIndex === index ? "block" : "none",
                    }}
                  >
                    {/* Testimonial Card */}
                    <div className="bg-white/90 dark:bg-gunmetal-900/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform hover:translate-y-[-5px] transition-transform duration-300">
                      {/* Top colored bar */}
                      <div className="h-2 bg-gradient-to-r from-sky-400 to-blue-600"></div>

                      <div className="p-8 md:p-10">
                        {/* Rating */}
                        <div className="flex mb-6">{renderStars(testimonial.rating)}</div>

                        {/* Testimonial Text */}
                        <blockquote className="text-slate-700 dark:text-slate-300 text-lg md:text-xl mb-8 italic leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Author Info with image */}
                        <div className="flex items-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                          <div className="w-16 h-16 rounded-full overflow-hidden mr-5 ring-2 ring-sky-100 dark:ring-sky-900/30">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 dark:text-white text-xl">{testimonial.author}</h4>
                            <p className="text-sky-600 dark:text-sky-400 text-lg">
                              {testimonial.position} • {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Navigation Buttons - Positioned on sides */}
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white/80 dark:bg-gunmetal-800/80 backdrop-blur-sm border-0 shadow-md hover:bg-white dark:hover:bg-gunmetal-800 md:flex hidden items-center justify-center z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white/80 dark:bg-gunmetal-800/80 backdrop-blur-sm border-0 shadow-md hover:bg-white dark:hover:bg-gunmetal-800 md:flex hidden items-center justify-center z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-sky-500 dark:bg-sky-400 scale-125"
                    : "bg-slate-300 dark:bg-slate-700 hover:bg-sky-300 dark:hover:bg-sky-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
