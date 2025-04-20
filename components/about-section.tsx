"use client"

import { useState } from "react"
import { Award, BookOpen, BriefcaseBusiness, X, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/scroll-animations"
import { motion } from "framer-motion"

// Simplified experience data
const experienceData = [
  {
    period: "2024",
    title: "Cloud Software Engineer",
    company: "Humanitarians AI Inc",
    logo: "/abstract-hai.png",
    description: "Developed cloud-native applications and implemented CI/CD pipelines.",
  },
  {
    period: "2023",
    title: "Cloud Developer",
    company: "Alnylam Pharmaceuticals",
    logo: "/abstract-dna-strand.png",
    description: "Built and maintained cloud infrastructure for pharmaceutical research applications.",
  },
  {
    period: "2022",
    title: "DevOps Engineer",
    company: "TechInnovate Solutions",
    logo: "/abstract-tech-logo.png",
    description: "Automated deployment processes and managed Kubernetes clusters.",
  },
  {
    period: "2021",
    title: "Full Stack Developer",
    company: "Digital Frontiers",
    logo: "/abstract-digital.png",
    description: "Developed web applications using React, Node.js, and AWS services.",
  },
]

const educationData = [
  {
    period: "2020 - 2022",
    degree: "M.S. in Information Systems",
    institution: "Northeastern University",
    logo: "/northeastern-university-seal.png",
    description: "Focused on cloud computing and distributed systems. GPA: 3.8/4.0",
  },
  {
    period: "2016 - 2020",
    degree: "B.Tech in Computer Science",
    institution: "University of Technology",
    logo: "/abstract-tech-logo.png",
    description: "Specialized in software engineering and data structures. GPA: 3.7/4.0",
  },
]

const certificationData = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    logo: "/aws-certified-professional.png",
    description: "Designed and deployed distributed systems on AWS",
  },
  {
    name: "Microsoft Azure Developer Associate",
    issuer: "Microsoft",
    date: "2022",
    logo: "/azure-certifications-overview.png",
    description: "Developed and maintained cloud applications using Azure services",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google",
    date: "2021",
    logo: "/google-cloud-certifications.png",
    description: "Designed, developed, and managed robust cloud architecture solutions",
  },
]

// Modal component
function DetailModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-gunmetal-900 rounded-xl shadow-xl overflow-hidden"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 md:p-6 bg-white dark:bg-gunmetal-900 border-b dark:border-gunmetal-800">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{title}</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="overflow-y-auto p-4 md:p-6 max-h-[calc(90vh-80px)]">{children}</div>
      </motion.div>
    </motion.div>
  )
}

// Simple vertical timeline component for experience and education
function SimpleVerticalTimeline({
  data,
  colorClass = "bg-sky-500 dark:bg-sky-400",
  textColorClass = "text-sky-600 dark:text-sky-400",
}) {
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className={`absolute left-0 md:left-8 top-0 bottom-0 w-0.5 ${colorClass}`}></div>

        {/* Timeline items */}
        <StaggerChildren staggerDelay={0.1}>
          <div className="space-y-12">
            {data.map((item, index) => (
              <StaggerItem key={index} direction="right">
                <div className="relative pl-6 md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-1.5 transform -translate-x-1/2 z-10">
                    <div className={`w-3 h-3 rounded-full ${colorClass}`}></div>
                  </div>

                  {/* Content */}
                  <div className="pb-4">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <span
                          className={`text-sm font-bold ${textColorClass} bg-sky-50 dark:bg-sky-900/20 px-2 py-1 rounded`}
                        >
                          {item.period}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start">
                          {/* Logo */}
                          <div className="w-12 h-12 bg-white dark:bg-gunmetal-800 rounded-md flex items-center justify-center mr-4 border border-slate-200 dark:border-gunmetal-700 overflow-hidden flex-shrink-0">
                            <img
                              src={item.logo || "/placeholder.svg"}
                              alt={`${item.company || item.institution} logo`}
                              className="w-10 h-10 object-contain"
                            />
                          </div>

                          {/* Details */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                              {item.title || item.degree}
                            </h4>
                            <p className="text-md font-medium text-slate-600 dark:text-slate-300">
                              {item.company || item.institution}
                            </p>
                            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </div>
  )
}

export default function AboutSection() {
  const [modalState, setModalState] = useState({
    experience: false,
    education: false,
    certification: false,
  })

  const openModal = (type) => {
    setModalState({ ...modalState, [type]: true })
  }

  const closeModal = (type) => {
    setModalState({ ...modalState, [type]: false })
  }

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-gunmetal-950">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800 dark:text-white">Get To Know More</h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-700 dark:from-sky-400 dark:to-blue-600 bg-clip-text text-transparent">
              About Me
            </h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn direction="up" delay={0.2}>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -8,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => openModal("experience")}
            >
              <div className="p-6 relative overflow-hidden">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center">
                    <BriefcaseBusiness className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-sky-600 dark:text-sky-400 text-center">Experience</h4>
                <p className="text-2xl font-bold mb-2 text-slate-800 dark:text-white text-center">
                  Cloud and Full Stack Development
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-center">3+ years</p>
                <div className="mt-4 text-center text-sm text-sky-600 dark:text-sky-400 flex items-center justify-center gap-1">
                  Click to view details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M7 7l5 5 5-5"></path>
                    <path d="M7 13l5 5 5-5"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -8,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => openModal("education")}
            >
              <div className="p-6 relative overflow-hidden">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400 text-center">Education</h4>
                <p className="text-lg font-bold mb-2 text-slate-800 dark:text-white text-center">
                  M.S. in Information Systems
                </p>
                <p className="text-lg font-bold mb-2 text-slate-800 dark:text-white text-center">
                  B.Tech in Computer Science
                </p>
                <div className="mt-4 text-center text-sm text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1">
                  Click to view details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M7 7l5 5 5-5"></path>
                    <path d="M7 13l5 5 5-5"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -8,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => openModal("certification")}
            >
              <div className="p-6 relative overflow-hidden">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-sky-600 dark:text-sky-400 text-center">
                  Certifications
                </h4>
                <p className="text-lg font-bold mb-2 text-slate-800 dark:text-white text-center">
                  AWS Certified Solutions Architect
                </p>
                <p className="text-lg font-bold mb-2 text-slate-800 dark:text-white text-center">
                  Azure Developer Associate
                </p>
                <div className="mt-4 text-center text-sm text-sky-600 dark:text-sky-400 flex items-center justify-center gap-1">
                  Click to view details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M7 7l5 5 5-5"></path>
                    <path d="M7 13l5 5 5-5"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5} fullWidth className="md:col-span-3">
            <div className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 md:mb-0 md:mr-8">
                    I am a passionate Full-Stack and Cloud Developer with expertise in building modern web applications.
                    With a strong foundation in both frontend and backend technologies, I create seamless user
                    experiences while ensuring robust and scalable architectures. My experience spans across various
                    industries, helping businesses transform their digital presence.
                  </p>

                  {/* Resume Download Button */}
                  <div className="flex-shrink-0">
                    <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      Download Full Resume
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Experience Modal */}
      <DetailModal isOpen={modalState.experience} onClose={() => closeModal("experience")} title="Professional Journey">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h4 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">
              My professional timeline showcasing my career progression in cloud and full-stack development.
            </h4>
          </div>

          <SimpleVerticalTimeline
            data={experienceData}
            colorClass="bg-sky-500 dark:bg-sky-400"
            textColorClass="text-sky-600 dark:text-sky-400"
          />

          {/* Resume Download Button in Modal */}
          <div className="flex justify-center mt-8">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Complete Resume
            </motion.a>
          </div>
        </div>
      </DetailModal>

      {/* Education Modal */}
      <DetailModal isOpen={modalState.education} onClose={() => closeModal("education")} title="Education">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h4 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">
              My educational background and academic achievements.
            </h4>
          </div>

          <SimpleVerticalTimeline
            data={educationData}
            colorClass="bg-blue-500 dark:bg-blue-400"
            textColorClass="text-blue-600 dark:text-blue-400"
          />
        </div>
      </DetailModal>

      {/* Certification Modal - Original Grid Layout */}
      <DetailModal isOpen={modalState.certification} onClose={() => closeModal("certification")} title="Certifications">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h4 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">
              Professional certifications that validate my expertise in cloud and development technologies.
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationData.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gunmetal-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-100 dark:bg-gunmetal-700 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={item.logo || "/placeholder.svg"} alt={item.name} className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">{item.name}</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {item.issuer} • {item.date}
                    </p>
                    <p className="text-slate-700 dark:text-slate-400 mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DetailModal>
    </section>
  )
}
