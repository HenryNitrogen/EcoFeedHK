"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  className?: string
  whileTap?: boolean
  whileHover?: boolean
}

export function AnimatedButton({
  children,
  className = "",
  whileTap = true,
  whileHover = true,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={
        whileHover
          ? {
              scale: 1.05,
              transition: { duration: 0.2 },
            }
          : {}
      }
      whileTap={
        whileTap
          ? {
              scale: 0.95,
              transition: { duration: 0.2 },
            }
          : {}
      }
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}

