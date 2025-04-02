"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function AnimatedCard({ children, className = "", hoverEffect = true }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.2 },
            }
          : {}
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

