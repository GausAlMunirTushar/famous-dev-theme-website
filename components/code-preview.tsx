"use client"

import { useState } from "react"
import { Copy, Check, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodePreviewProps {
  code: string
  language: string
  theme: "dark" | "midnight" | "light"
}

const codeExamples: Record<string, Record<string, string>> = {
  javascript: {
    dark: `// JavaScript Example - Famous Dev Dark
const greeting = (name) => {
  return \`Hello, \${name}!\`;
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const numbers = [1, 2, 3, 4, 5];
numbers
  .map(n => n * 2)
  .filter(n => n > 5)
  .forEach(n => console.log(n));`,
    midnight: `// JavaScript Example - Famous Dev Midnight
const greeting = (name) => {
  return \`Hello, \${name}!\`;
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const numbers = [1, 2, 3, 4, 5];
numbers
  .map(n => n * 2)
  .filter(n => n > 5)
  .forEach(n => console.log(n));`,
    light: `// JavaScript Example - Famous Dev Light
const greeting = (name) => {
  return \`Hello, \${name}!\`;
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const numbers = [1, 2, 3, 4, 5];
numbers
  .map(n => n * 2)
  .filter(n => n > 5)
  .forEach(n => console.log(n));`,
  },
  typescript: {
    dark: `// TypeScript Example - Famous Dev Dark
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }
}

const manager = new UserManager();`,
    midnight: `// TypeScript Example - Famous Dev Midnight
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }
}

const manager = new UserManager();`,
    light: `// TypeScript Example - Famous Dev Light
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }
}

const manager = new UserManager();`,
  },
  react: {
    dark: `// React Example - Famous Dev Dark
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={() => setCount(c => c - 1)}
        className="px-4 py-2 bg-red-500"
      >
        -
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button 
        onClick={() => setCount(c => c + 1)}
        className="px-4 py-2 bg-green-500"
      >
        +
      </button>
    </div>
  );
}`,
    midnight: `// React Example - Famous Dev Midnight
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={() => setCount(c => c - 1)}
        className="px-4 py-2 bg-red-500"
      >
        -
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button 
        onClick={() => setCount(c => c + 1)}
        className="px-4 py-2 bg-green-500"
      >
        +
      </button>
    </div>
  );
}`,
    light: `// React Example - Famous Dev Light
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={() => setCount(c => c - 1)}
        className="px-4 py-2 bg-red-500"
      >
        -
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button 
        onClick={() => setCount(c => c + 1)}
        className="px-4 py-2 bg-green-500"
      >
        +
      </button>
    </div>
  );
}`,
  },
}

export function CodePreview({ code, language, theme }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)
  const [zoom, setZoom] = useState(100)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getThemeClass = () => {
    switch (theme) {
      case "dark":
        return "bg-[#16161a] text-[#e4e4e7]"
      case "midnight":
        return "bg-[#0f0f14] text-[#e8e8f0]"
      case "light":
        return "bg-[#fafafa] text-[#27272a]"
    }
  }

  return (
    <div className={`rounded-lg border border-border overflow-hidden ${getThemeClass()}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/30 bg-opacity-50">
        <span className="text-xs font-mono uppercase tracking-wider opacity-60">{language}</span>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setZoom(Math.max(75, zoom - 10))} className="h-8 w-8 p-0">
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-xs w-8 text-center">{zoom}%</span>
          <Button variant="ghost" size="sm" onClick={() => setZoom(Math.min(150, zoom + 10))} className="h-8 w-8 p-0">
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 w-8 p-0 ml-2">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Code */}
      <pre className="p-4 overflow-x-auto" style={{ fontSize: `${zoom}%` }}>
        <code className="font-mono leading-relaxed whitespace-pre">{code}</code>
      </pre>
    </div>
  )
}
