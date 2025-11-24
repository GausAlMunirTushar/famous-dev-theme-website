"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Copy, Check } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("code-theme install famous-dev")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-red-600 dark:text-red-400">Now available for VS Code</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 flex flex-col items-center justify-center gap-4">
          <Image src="/logo.png" alt="Famous Dev" width={48} height={48} className="w-12 h-12" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Beautiful VSCode Theme <br />
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent">
              Beautiful Code
            </span>
          </h1>
        </motion.div>

        {/* Main headline */}
        {/* <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Beautiful Code, <br />
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Beautiful Theme
          </span>
        </motion.h1> */}

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance"
        >
          Experience a modern, developer-centric VS Code theme with stunning color variants designed for those who love
          beautiful code.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white group" asChild>
            <Link href="https://marketplace.visualstudio.com/items?itemName=GausAlMunirTushar.famous-dev-theme" target="_blank">
              Preview Theme
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/GausAlMunirTushar/famous-dev-theme" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-4 h-4" />
              View on GitHub
            </Link>
          </Button>
        </motion.div>

        {/* Installation command */}
        {/* <motion.div variants={itemVariants} className="mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors cursor-pointer group">
            <code className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              code-theme install famous-dev
            </code>
            <button
              onClick={handleCopy}
              className="ml-2 p-1 hover:bg-red-500/10 rounded transition-colors"
              aria-label="Copy installation command"
            >
              {copied ? (
                <Check className="w-4 h-4 text-red-500" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              )}
            </button>
          </div>
        </motion.div> */}

        {/* Feature highlight */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "3 Variants",
              description: "Dark, Midnight, and Light themes",
              icon: "🎨",
            },
            {
              title: "Smooth Animations",
              description: "Delightful micro-interactions",
              icon: "✨",
            },
            {
              title: "Open Source",
              description: "Community-driven development",
              icon: "🚀",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
