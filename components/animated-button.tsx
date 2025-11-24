"use client"

import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import type React from "react"

export function AnimatedButton(props: ButtonProps & { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button {...props} />
    </motion.div>
  )
}
