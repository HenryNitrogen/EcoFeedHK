"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  size?: number
  color?: string
  animationType?: "pulse" | "bounce" | "spin" | "wiggle"
}

export function AnimatedIcon({
  icon: Icon,
  className = "",
  size = 24,
  color = "currentColor",
  animationType = "pulse",
}: AnimatedIconProps) {
  // Define animation variants
  const animations = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
    spin: {
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
    wiggle: {
      rotate: [-5, 5, -5],
      transition: {
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  return (
    <motion.div animate={animations[animationType]} className={className}>
      <Icon size={size} color={color} />
    </motion.div>
  )
}

