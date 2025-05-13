"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { ArrowUpRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/scroll-animations"

// Sample article data - replace with your actual Medium articles
const articles = [
  {
    title: "Can Your App Handle The Hype : AWS System Design",
    excerpt: "This article dives deep into basics of System Design that lets your application scale gracefully on AWS",
    image: "/medium-article-1.png",
    date: "Apr 21, 2025",
    url: "https://medium.com/@thecloudkid/sysd-1-3f5e21922130",
    readTime: "8 min read",
  },
  // {
  //   title: "Kubernetes Best Practices for Production Environments",
  //   excerpt: "Discover essential practices for running stable, secure Kubernetes clusters in production.",
  //   image: "/article-kubernetes.jpg",
  //   date: "Mar 22, 2024",
  //   url: "https://medium.com/@username/article-2",
  //   readTime: "12 min read",
  // },
  // {
  //   title: "Implementing CI/CD Pipelines with GitHub Actions",
  //   excerpt: "A step-by-step guide to setting up efficient CI/CD workflows using GitHub Actions for your projects.",
  //   image: "/article-cicd.jpg",
  //   date: "Feb 10, 2024",
  //   url: "https://medium.com/@username/article-3",
  //   readTime: "10 min read",
  // },
]

export default function ArticleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="articles" ref={ref} className="py-20 bg-slate-50 dark:bg-gunmetal-950">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800 dark:text-white">Latest Articles</h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-700 dark:from-sky-400 dark:to-blue-600 bg-clip-text text-transparent">
              Thoughts and Insights
            </h3>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15}>
        <div className="grid gap-8 justify-center"
                style = {{
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  justifyItems: "center"
                }}>
            {articles.map((article, index) => (
              <StaggerItem key={article.title} direction="up">
                <div className="bg-white dark:bg-gunmetal-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 h-full">
                  <Link href={article.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 p-4 flex items-center text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{article.date}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{article.readTime}</span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-sky-600 dark:text-sky-400 font-medium mt-auto">
                        Read on Medium
                        <ArrowUpRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <FadeIn direction="up" delay={0.5}>
          <div className="mt-12 text-center">
            <Link href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-full px-6 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-950/30"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
