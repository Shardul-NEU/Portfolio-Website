"use client"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/scroll-animations"

const projects = [
  {
    id: 1,
    title: "AWS-DEVOPS-WEBAPP",
    description: "Project implements AWS infrastructure and DevOps best practices including security, CI/CD, IaC, Scalability and Availability",
    image: "/Projects-Image-1.png",
    github: "https://github.com/Shardul-NEU/AWS_DEVOPS_WEBAPP",
    demo: "https://github.com/Shardul-NEU/AWS_DEVOPS_WEBAPP",
  },
  {
    id: 2,
    title: "AWS Mini Projects",
    description: "This repository hosts different mini projects on AWS, ranging from Automated Resource Tagging, CDN deployment, CI/CD using CodePipeline",
    image: "/Projects-Image-2.png",
    github: "https://github.com/Shardul-NEU/AWS_Projects",
    demo: "https://github.com/Shardul-NEU/AWS_Projects",
  },
  // {
  //   id: 3,
  //   title: "Project Three",
  //   description: "A mobile-first e-commerce platform with payment integration",
  //   image: "/placeholder.svg?height=300&width=500",
  //   github: "#",
  //   demo: "#",
  // },
]

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gunmetal-950/50">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800 dark:text-white">Browse My Recent</h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-700 dark:from-sky-400 dark:to-blue-600 bg-clip-text text-transparent">
              Projects
            </h3>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid gap-8 justify-center"
                style = {{
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  justifyItems: "center"
                }}>
            {projects.map((project) => (
              <StaggerItem key={project.id} direction="up">
                <div className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden h-full">
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30"
                        >
                          <Github className="mr-2 h-4 w-4" /> Github
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{project.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
