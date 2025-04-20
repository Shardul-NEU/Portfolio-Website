"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    logo: "/aws-certified.png",
    color: "#FF9900",
  },
  {
    name: "Terraform Certified Associate",
    logo: "/terraform-certified.png",
    color: "#7B42BC",
  },
  {
    name: "Google Cloud Professional",
    logo: "/gcp-certified.png",
    color: "#4285F4",
  },
  {
    name: "Docker Certified Associate",
    logo: "/docker-certified.png",
    color: "#2496ED",
  },
  {
    name: "Certified Kubernetes Administrator",
    logo: "/kubernetes-certified.png",
    color: "#326CE5",
  },
]

export default function CertificationBadgesCarousel() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-gunmetal-950 dark:to-gunmetal-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
            Professional Certifications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Industry-recognized credentials that validate my expertise in cloud and DevOps technologies.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <motion.div
            variants={{
              hidden: { x: 0 },
              visible: {
                x: [0, -1800, 0],
                transition: {
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                },
              },
            }}
            initial="hidden"
            animate={controls}
            className="flex gap-8"
          >
            {/* First set of badges */}
            {certifications.map((cert) => (
              <motion.div
                key={`first-${cert.name}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5,
                  transition: { duration: 0.1 },
                }}
                className="relative flex-shrink-0 w-64 h-64 rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-90 dark:opacity-80"
                  style={{ backgroundColor: cert.color }}
                ></div>

                <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                  <div className="w-24 h-24 mb-4 flex items-center justify-center">
                    <img
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-center">{cert.name}</h3>
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {certifications.map((cert) => (
              <motion.div
                key={`second-${cert.name}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5,
                  transition: { duration: 0.1 },
                }}
                className="relative flex-shrink-0 w-64 h-64 rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-90 dark:opacity-80"
                  style={{ backgroundColor: cert.color }}
                ></div>

                <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                  <div className="w-24 h-24 mb-4 flex items-center justify-center">
                    <img
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-center">{cert.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
