"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [theme, setTheme] = useState<string>("light")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="Famous Dev Logo" width={32} height={32} className="w-8 h-8" priority />
          <span className="hidden sm:inline">Famous Dev Theme</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">
            Docs
          </Link>
          <Link href="/changelog" className="text-sm font-medium hover:text-primary transition-colors">
            Changelog
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hidden sm:inline-flex"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>

          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <Link href="https://github.com/GausAlMunirTushar/famous-dev-theme" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </Link>
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/docs" className="block text-sm font-medium hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="/changelog" className="block text-sm font-medium hover:text-primary transition-colors">
              Changelog
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-full">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
