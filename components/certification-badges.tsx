"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    logo: "/aws-badge.png",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    logo: "/terraform-badge.png",
  },
  {
    name: "Google Cloud Professional",
    logo: "/gcp-badge.png",
  },
  {
    name: "Docker Certified Associate",
    logo: "/docker-badge.png",
  },
  {
    name: "Certified Kubernetes Administrator",
    logo: "/kubernetes-badge.png",
  },
]

export default function CertificationBadges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section ref={ref} className="py-12 bg-white dark:bg-gunmetal-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              className="w-24 h-24 md:w-32 md:h-32"
            >
              <img
                src={cert.logo || "/placeholder.svg"}
                alt={cert.name}
                className="w-full h-full object-contain"
                title={cert.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
