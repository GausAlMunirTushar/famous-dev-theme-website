"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Palette, Moon, Grid, Sparkles } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "Hand-crafted Palette",
      description: "Carefully selected colors optimized for readability and visual harmony across all languages.",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Lightweight theme that loads instantly without compromising visual quality.",
    },
    {
      icon: Code2,
      title: "Language Support",
      description: "Syntax highlighting for 10+ programming languages and file types.",
    },
    {
      icon: Moon,
      title: "Multiple Variants",
      description: "Choose between Dark, Midnight, and Light themes to suit your preference.",
    },
    {
      icon: Grid,
      title: "UI Framework Ready",
      description: "Perfect support for terminal, debug panels, and all VS Code UI elements.",
    },
    {
      icon: Sparkles,
      title: "Continuously Updated",
      description: "Regular updates and improvements based on community feedback.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Why Choose Famous Dev?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
          >
            A theme built by developers for developers, with every detail perfected.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="mb-4 p-2 w-fit rounded-lg bg-red-500/10">
                  <Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
