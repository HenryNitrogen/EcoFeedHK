"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface AnimatedProcessStepProps {
  icon: LucideIcon
  title: string
  description: string
  step: number
  delay?: number
}

export function AnimatedProcessStep({ icon: Icon, title, description, step, delay = 0 }: AnimatedProcessStepProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants}>
      <Card className="relative">
        <motion.div
          className="absolute -top-4 -left-4 rounded-full bg-green-600 text-white w-8 h-8 flex items-center justify-center font-bold"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1, transition: { delay: delay + 0.2, type: "spring", stiffness: 200 } } : {}}
        >
          {step}
        </motion.div>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-green-600" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

