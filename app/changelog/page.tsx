"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const changelog = [
  {
    version: "2.0.0",
    date: "November 20, 2024",
    tag: "Major",
    changes: [
      "Complete redesign of color palette",
      "Added Midnight theme variant",
      "Improved syntax highlighting for React",
      "Enhanced terminal integration",
    ],
  },
  {
    version: "1.5.0",
    date: "October 15, 2024",
    tag: "Minor",
    changes: [
      "Added Light theme variant",
      "Improved code folding colors",
      "Better support for decorators",
      "UI improvements in debug console",
    ],
  },
  {
    version: "1.4.2",
    date: "September 10, 2024",
    tag: "Fix",
    changes: ["Fixed bracket matching colors", "Improved contrast in terminal", "Fixed markdown code block styling"],
  },
  {
    version: "1.4.1",
    date: "August 25, 2024",
    tag: "Fix",
    changes: ["Fixed line number colors", "Improved selection highlighting"],
  },
  {
    version: "1.4.0",
    date: "August 10, 2024",
    tag: "Minor",
    changes: [
      "Added support for new VS Code features",
      "Improved accessibility with WCAG AA compliance",
      "Enhanced TypeScript support",
    ],
  },
]

const tagColors: Record<string, string> = {
  Major: "bg-red-500/10 text-red-600 border-red-200",
  Minor: "bg-blue-500/10 text-blue-600 border-blue-200",
  Fix: "bg-green-500/10 text-green-600 border-green-200",
}

export default function ChangelogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Changelog</h1>
            <p className="text-lg text-muted-foreground">
              Track all updates and improvements to Famous Dev Theme over time.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {changelog.map((entry, idx) => (
              <motion.div
                key={entry.version}
                variants={itemVariants}
                className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-red-500 border-4 border-background" />

                {/* Content */}
                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">v{entry.version}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {entry.date}
                      </div>
                    </div>
                    <Badge className={`w-fit ${tagColors[entry.tag]}`}>{entry.tag}</Badge>
                  </div>

                  <ul className="space-y-2">
                    {entry.changes.map((change, changeIdx) => (
                      <li key={changeIdx} className="flex gap-3 text-foreground/80">
                        <span className="text-red-500 font-bold">+</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Early Releases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 rounded-lg border border-border/50 bg-muted/30 backdrop-blur-sm"
          >
            <h2 className="text-lg font-semibold mb-4">Early Releases</h2>
            <p className="text-muted-foreground mb-4">
              Famous Dev Theme was originally released in January 2024. For a complete history of all updates and
              releases, visit our GitHub repository.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
