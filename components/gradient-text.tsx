"use client"

import type React from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
