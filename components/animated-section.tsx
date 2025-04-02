"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: AnimatedSectionProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })

  // Calculate offset based on direction
  let offset = { x: 0, y: 0 }
  if (direction === "up") offset = { x: 0, y: 50 }
  if (direction === "down") offset = { x: 0, y: -50 }
  if (direction === "left") offset = { x: 50, y: 0 }
  if (direction === "right") offset = { x: -50, y: 0 }

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      })
    }
  }, [isInView, controls, delay, duration])

  return (
    <motion.div ref={ref} initial={{ ...offset, opacity: 0 }} animate={controls} className={className}>
      {children}
    </motion.div>
  )
}

