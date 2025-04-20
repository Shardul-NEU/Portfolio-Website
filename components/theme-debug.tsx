"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeDebug() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg text-xs">
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={() => setTheme("light")} className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded">
          Light
        </button>
        <button onClick={() => setTheme("dark")} className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded">
          Dark
        </button>
        <button onClick={() => setTheme("system")} className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded">
          System
        </button>
      </div>
    </div>
  )
}
