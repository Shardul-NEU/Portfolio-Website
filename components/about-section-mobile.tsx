"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

// Simplified experience data with focus on visual elements
const experienceData = [
  {
    period: "2024",
    title: "Cloud Software Engineer",
    company: "Humanitarians AI Inc",
    logo: "/abstract-hai.png",
    color: "#3B82F6",
  },
  {
    period: "2023",
    title: "Cloud Developer",
    company: "Alnylam Pharmaceuticals",
    logo: "/abstract-dna-strand.png",
    color: "#10B981",
  },
  {
    period: "2022",
    title: "DevOps Engineer",
    company: "TechInnovate Solutions",
    logo: "/abstract-tech-logo.png",
    color: "#F59E0B",
  },
  {
    period: "2021",
    title: "Full Stack Developer",
    company: "Digital Frontiers",
    logo: "/abstract-digital.png",
    color: "#8B5CF6",
  },
]

// Mobile-optimized vertical timeline component
export default function MobileVerticalTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <div className="py-8 px-4" ref={ref}>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 to-indigo-700 dark:from-sky-400 dark:to-indigo-600 rounded-full"></div>

        {/* Timeline items */}
        <div className="space-y-16">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 transform -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-5 h-5 rounded-full bg-white dark:bg-gunmetal-900 border-3"
                  style={{ borderColor: item.color }}
                ></motion.div>
              </div>

              {/* Year badge */}
              <div
                className="absolute left-12 top-0 font-bold text-white px-3 py-1 rounded-lg text-sm shadow-md"
                style={{ backgroundColor: item.color }}
              >
                {item.period}
              </div>

              {/* Content card */}
              <motion.div
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white dark:bg-gunmetal-800 rounded-xl shadow-md overflow-hidden mt-8"
              >
                <div className="p-4">
                  {/* Logo */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-gunmetal-700 p-1 border border-slate-200 dark:border-gunmetal-600 mr-4">
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={item.company}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white">{item.title}</h4>
                      <p className="text-md font-medium" style={{ color: item.color }}>
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* View details link */}
                  <div className="mt-2 text-right">
                    <Link
                      href="#"
                      className="inline-flex items-center text-xs font-medium"
                      style={{ color: item.color }}
                    >
                      View Details <ExternalLink className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
