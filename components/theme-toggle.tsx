"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-1 rounded-full bg-sky-100 p-1 dark:bg-slate-800"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className={`rounded-full ${theme === "light" ? "bg-white text-sky-500 shadow-sm" : "text-slate-500"}`}
        aria-label="Light mode"
      >
        <Sun className="h-5 w-5" />
        <span className="sr-only">Light mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className={`rounded-full ${theme === "dark" ? "bg-slate-700 text-sky-300 shadow-sm" : "text-slate-500"}`}
        aria-label="Dark mode"
      >
        <Moon className="h-5 w-5" />
        <span className="sr-only">Dark mode</span>
      </Button>
    </motion.div>
  )
}
