"use client"

import { motion } from "framer-motion"
import type React from "react"

interface HoverCardAnimatedProps {
  children: React.ReactNode
  className?: string
}

export function HoverCardAnimated({ children, className }: HoverCardAnimatedProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
