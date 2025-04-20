"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/scroll-animations"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: "Message sent successfully!" })
    // Reset form after submission
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "", message: "" })
      setFormStatus({ submitted: false, success: false, message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-gunmetal-950">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800 dark:text-white">Get in Touch</h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-700 dark:from-sky-400 dark:to-blue-600 bg-clip-text text-transparent">
              Contact Me
            </h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden p-6">
              <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Send Me a Message</h4>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="border-slate-300 dark:border-gunmetal-700 focus:border-sky-500 dark:focus:border-sky-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Your Email"
                      className="border-slate-300 dark:border-gunmetal-700 focus:border-sky-500 dark:focus:border-sky-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="border-slate-300 dark:border-gunmetal-700 focus:border-sky-500 dark:focus:border-sky-500"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="border-slate-300 dark:border-gunmetal-700 focus:border-sky-500 dark:focus:border-sky-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600"
                  disabled={formStatus.submitted}
                >
                  {formStatus.submitted ? "Sending..." : "Send Message"}
                </Button>
                {formStatus.message && (
                  <p
                    className={`text-sm ${
                      formStatus.success ? "text-sky-600 dark:text-sky-400" : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.4}>
            <div className="flex flex-col justify-center">
              <StaggerChildren staggerDelay={0.1}>
                <div className="space-y-6">
                  <StaggerItem direction="right">
                    <div className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center mr-4">
                          <Mail className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-800 dark:text-white mb-1">Email</h5>
                          <a
                            href="mailto:example@gmail.com"
                            className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                          >
                            example@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem direction="right">
                    <div className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center mr-4">
                          <Linkedin className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-800 dark:text-white mb-1">LinkedIn</h5>
                          <a
                            href="https://linkedin.com/in/shardul-deshmukh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                          >
                            linkedin.com/in/shardul-deshmukh
                          </a>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem direction="right">
                    <div className="bg-white dark:bg-gunmetal-900 rounded-xl shadow-md overflow-hidden p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center mr-4">
                          <Github className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-800 dark:text-white mb-1">GitHub</h5>
                          <a
                            href="https://github.com/shardul-deshmukh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                          >
                            github.com/shardul-deshmukh
                          </a>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                </div>
              </StaggerChildren>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
