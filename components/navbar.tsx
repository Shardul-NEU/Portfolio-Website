"use client"

import { useState, useEffect } from "react"
import { MoonIcon, SunIcon, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Articles", href: "#articles" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

// Create ThemeToggle component inline
function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle navigation link clicks
  const handleNavClick = (href) => {
    // For the home link (href="#"), set activeSection to "home"
    if (href === "#") {
      setActiveSection("home")
    } else {
      // For other links, extract the section name from the href
      setActiveSection(href.replace("#", ""))
    }

    // Close mobile menu if it's open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleSectionObservation = () => {
      // Get all section IDs from navItems
      const sections = navItems.map((item) => item.href.replace("#", "")).filter(Boolean)

      // Add special handling for home section
      const homeSection = document.getElementById("home") || document.querySelector("main > div:first-child")

      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0,
      }

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the section has an ID, use it; otherwise check if it's the home section
            if (entry.target.id) {
              setActiveSection(entry.target.id)
            } else if (entry.target === homeSection) {
              setActiveSection("home")
            }
          }
        })
      }

      const observer = new IntersectionObserver(observerCallback, observerOptions)

      // Observe all sections including home
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.observe(element)
      })

      // Observe home section if it exists
      if (homeSection && !homeSection.id) {
        observer.observe(homeSection)
      }

      return () => observer.disconnect()
    }

    window.addEventListener("scroll", handleScroll)
    const cleanup = handleSectionObservation()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (cleanup) cleanup()
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gunmetal-950/90" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            onClick={() => handleNavClick("#")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold text-black dark:text-white transition-colors"
          >
            Shardul Deshmukh
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  (item.href === "#" && activeSection === "home") ||
                  (item.href !== "#" && activeSection === item.href.replace("#", ""))
                    ? "text-sky-600 dark:text-sky-400"
                    : "text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400"
                }`}
              >
                {item.name}
                {((item.href === "#" && activeSection === "home") ||
                  (item.href !== "#" && activeSection === item.href.replace("#", ""))) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 dark:bg-sky-400 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              className="text-slate-700 dark:text-slate-200 menu-button"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gunmetal-900 border-t dark:border-gunmetal-800 mobile-menu"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`py-2 px-4 rounded-md ${
                    (item.href === "#" && activeSection === "home") ||
                    (item.href !== "#" && activeSection === item.href.replace("#", ""))
                      ? "bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-gunmetal-800"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
