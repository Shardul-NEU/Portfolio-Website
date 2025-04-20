"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/scroll-animations"

const skills = {
  frontend: [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "SASS", level: "Intermediate" },
    { name: "JavaScript", level: "Basic" },
    { name: "TypeScript", level: "Basic" },
    { name: "Material UI", level: "Intermediate" },
  ],
  backend: [
    { name: "PostgreSQL", level: "Basic" },
    { name: "Node JS", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
  ],
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-20 bg-slate-50 dark:bg-gunmetal-950">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800 dark:text-white">Explore My</h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-700 dark:from-sky-400 dark:to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-6 text-sky-600 dark:text-sky-400 text-center">
                  Frontend Development
                </h4>
                <StaggerChildren staggerDelay={0.1}>
                  <div className="grid grid-cols-2 gap-6">
                    {skills.frontend.map((skill) => (
                      <StaggerItem key={skill.name} direction="up">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center mb-3">
                            <span className="text-sky-600 dark:text-sky-400 font-bold">
                              {skill.name.substring(0, 2)}
                            </span>
                          </div>
                          <h5 className="font-medium text-slate-800 dark:text-white mb-1">{skill.name}</h5>
                          <Badge
                            variant="outline"
                            className="bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 border-sky-200 dark:border-sky-800"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerChildren>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.4}>
            <div className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-6 text-sky-600 dark:text-sky-400 text-center">
                  Backend Development
                </h4>
                <StaggerChildren staggerDelay={0.1}>
                  <div className="grid grid-cols-2 gap-6">
                    {skills.backend.map((skill) => (
                      <StaggerItem key={skill.name} direction="up">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">
                              {skill.name.substring(0, 2)}
                            </span>
                          </div>
                          <h5 className="font-medium text-slate-800 dark:text-white mb-1">{skill.name}</h5>
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerChildren>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
