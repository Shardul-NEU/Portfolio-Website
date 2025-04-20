"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

// Fade in animation when element comes into view
export function FadeIn({
  children,
  delay = 0,
  direction = null,
  fullWidth = false,
  className = "",
}: {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | null
  fullWidth?: boolean
  className?: string
}) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref])

  // Set initial animation values based on direction
  let initialX = 0
  let initialY = 0

  if (direction === "up") initialY = 50
  if (direction === "down") initialY = -50
  if (direction === "left") initialX = 50
  if (direction === "right") initialX = -50

  return (
    <motion.div
      ref={setRef}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation for multiple children
export function StaggerChildren({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
}: {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref])

  return (
    <motion.div
      ref={setRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Child item for staggered animations
export function StaggerItem({
  children,
  direction = "up",
  className = "",
}: {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  className?: string
}) {
  // Set initial animation values based on direction
  let initialX = 0
  let initialY = 0

  if (direction === "up") initialY = 50
  if (direction === "down") initialY = -50
  if (direction === "left") initialX = 50
  if (direction === "right") initialX = -50

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: initialX, y: initialY },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax effect for background elements
export function ParallaxContainer({
  children,
  speed = 0.5,
  className = "",
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (value) => value * speed * -1)

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

// Scroll progress indicator
export function ScrollProgress({
  color = "bg-sky-500 dark:bg-sky-400",
  height = "h-1",
  position = "top",
}: {
  color?: string
  height?: string
  position?: "top" | "bottom"
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className={`fixed ${position === "top" ? "top-0" : "bottom-0"} left-0 right-0 ${height} ${color} z-50`}
    />
  )
}
