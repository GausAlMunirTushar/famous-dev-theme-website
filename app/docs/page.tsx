"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Code2, Settings, Globe, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const docSections = [
  {
    id: "installation",
    title: "Installation",
    icon: Code2,
    content: `## Quick Start

Install Famous Dev Theme directly from the VS Code Extension Marketplace in just a few clicks.

### Step-by-Step Installation

1. **Open VS Code Extensions**
   - Press \`Ctrl+Shift+X\` on Windows/Linux or \`Cmd+Shift+X\` on Mac
   - This opens the Extensions panel in your sidebar

2. **Search for Famous Dev**
   - Type "Famous Dev Theme" in the search box
   - Look for the official theme with the red diamond logo

3. **Click Install**
   - The installation happens instantly
   - VS Code will prompt you to reload if needed

### Command Line Installation

If you prefer the command line, run:

\`\`\`bash
code --install-extension famous-dev.famous-dev-theme
\`\`\`

### Using Code Theme CLI

With the Code Theme CLI installed:

\`\`\`bash
code-theme install famous-dev
\`\`\`

Once installed, go to the Color Theme selector and choose your preferred Famous Dev variant.`,
  },
  {
    id: "settings",
    title: "Recommended Settings",
    icon: Settings,
    content: `## Optimal Configuration

Enhance your Famous Dev Theme experience with these recommended settings. Add them to your VS Code \`settings.json\` file:

### Font & Typography

\`\`\`json
{
  "editor.fontFamily": "JetBrains Mono, Fira Code, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.letterSpacing": 0.5,
  "editor.fontWeight": "500"
}
\`\`\`

### Editor Experience

\`\`\`json
{
  "editor.cursorStyle": "line",
  "editor.cursorBlinking": "smooth",
  "editor.cursorWidth": 2,
  "editor.minimap.enabled": true,
  "editor.smoothScrolling": true,
  "editor.tokenColorCustomizations": {
    "[Famous Dev Dark]": {
      "comments": "#64748b"
    }
  }
}
\`\`\`

### UI Polish

\`\`\`json
{
  "workbench.editor.enablePreview": false,
  "workbench.editor.showTabs": true,
  "editor.autoClosingBrackets": "always",
  "editor.formatOnSave": true
}
\`\`\`

These settings work across all Famous Dev theme variants and enhance readability and performance.`,
  },
  {
    id: "languages",
    title: "Supported Languages",
    icon: Globe,
    content: `## Language Support

Famous Dev Theme provides beautiful syntax highlighting for 100+ programming languages. Here are some of the primary supported languages:

### Web Development
- **JavaScript** - Full ES6+ support with JSX
- **TypeScript** - Complete type annotation highlighting
- **React** - JSX syntax with component keywords
- **Vue.js** - Vue single-file components
- **HTML** - Semantic HTML with custom elements
- **CSS** - Including Sass, Less, Stylus variants

### Backend & Systems
- **Python** - Django, Flask, FastAPI friendly
- **Java** - Spring framework compatible
- **C#** - .NET and Unity ready
- **C++** - Modern C++ with templates
- **Go** - Optimized for readability
- **Rust** - Cargo and module highlighting
- **PHP** - Laravel, Symfony support
- **Ruby** - Rails framework ready

### Data & Query Languages
- **SQL** - Multiple dialect support
- **GraphQL** - Schema and query highlighting
- **MongoDB** - Query syntax highlighting
- **Prisma** - ORM syntax highlighting
- **JSON** - Including JSON5 and JSON-LD
- **YAML** - Configuration file friendly
- **XML** - With namespace support

### Markup & Documentation
- **Markdown** - GitHub Flavored Markdown
- **MDX** - Markdown with React components
- **XML** - Including SVG files
- **TOML** - Configuration files
- **Docker** - Dockerfile optimized

And many more! The theme is designed to work beautifully across your entire development stack.`,
  },
  {
    id: "faq",
    title: "FAQ",
    icon: HelpCircle,
    content: `## Frequently Asked Questions

### How do I switch between theme variants?

Use the Command Palette (\`Ctrl+Shift+P\` / \`Cmd+Shift+P\`) and search for "Color Theme". You'll see three Famous Dev options:
- **Famous Dev Dark** - Primary theme for most developers
- **Famous Dev Midnight** - Deeper blacks for reduced eye strain
- **Famous Dev Light** - Beautiful light theme for daytime work

### Can I customize the colors?

VS Code allows color customization through \`settings.json\`. You can override specific token colors while keeping the rest of the theme. See the Recommended Settings section for examples.

### I see a language with odd syntax highlighting. How do I report it?

Please open an issue on our GitHub repository with:
- The language and file extension
- A code snippet showing the problem
- Your VS Code version and theme variant

### Does Famous Dev work with VS Code extensions?

Yes! The theme works with all popular extensions. If you notice an extension doesn't display correctly, it's likely a scope conflict. Report it on GitHub with the extension name.

### Is there a way to contribute color suggestions?

We welcome community feedback! Visit our GitHub repository to:
- Suggest new color adjustments
- Request language support additions
- Share screenshots of your setup
- Contribute improvements

### Will the theme receive updates?

Yes, we continuously improve Famous Dev based on community feedback and new language support. Updates arrive automatically through the VS Code Extension Marketplace.

### Is Famous Dev open source?

Yes! The theme is open source on GitHub. You can view the source, suggest changes, or fork it for your own customization.

### What's the best way to report a bug?

Create a GitHub issue with:
- A clear description of the problem
- Your VS Code version (Help → About)
- Your theme variant
- A screenshot or code example`,
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("installation")

  const currentSection = docSections.find((s) => s.id === activeSection)

  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">Documentation</h1>
              <p className="text-lg text-muted-foreground">Everything you need to know about Famous Dev Theme</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-4">
                  Documentation Sections
                </p>
                {docSections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 text-sm font-medium ${
                        activeSection === section.id
                          ? "bg-red-600 text-white shadow-lg shadow-red-500/20"
                          : "text-foreground hover:bg-card/50"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      {section.title}
                    </button>
                  )
                })}
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">{currentSection?.title}</h2>
                  <div className="prose prose-sm max-w-none space-y-4 text-foreground/90 leading-relaxed">
                    {currentSection?.content.split("\n\n").map((paragraph, idx) => {
                      if (paragraph.startsWith("```")) {
                        // Handle code blocks
                        const codeContent = paragraph
                          .replace(/^```\w+\n?/, "")
                          .replace(/\n?```$/, "")
                          .trim()
                        return (
                          <div key={idx} className="my-6 overflow-x-auto">
                            <div className="bg-card/50 border border-border rounded-lg p-4">
                              <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
                                <code>{codeContent}</code>
                              </pre>
                            </div>
                          </div>
                        )
                      } else if (paragraph.startsWith("##")) {
                        // Handle subheadings
                        const title = paragraph.replace(/^##\s*/, "").trim()
                        return (
                          <h3 key={idx} className="text-xl font-semibold mt-8 mb-3">
                            {title}
                          </h3>
                        )
                      } else if (paragraph.startsWith("-")) {
                        // Handle bullet lists
                        const items = paragraph.split("\n").filter((line) => line.startsWith("-"))
                        return (
                          <ul key={idx} className="space-y-2 ml-4">
                            {items.map((item, itemIdx) => (
                              <li key={itemIdx} className="list-disc list-inside text-foreground/85">
                                {item.replace(/^-\s*/, "")}
                              </li>
                            ))}
                          </ul>
                        )
                      } else {
                        return (
                          <p key={idx} className="text-foreground/85 leading-relaxed">
                            {paragraph}
                          </p>
                        )
                      }
                    })}
                  </div>
                </div>

                {/* Navigation between sections */}
                <div className="flex gap-4 pt-8 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => {
                      const currentIdx = docSections.findIndex((s) => s.id === activeSection)
                      if (currentIdx > 0) {
                        setActiveSection(docSections[currentIdx - 1].id)
                      }
                    }}
                    disabled={docSections.findIndex((s) => s.id === activeSection) === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => {
                      const currentIdx = docSections.findIndex((s) => s.id === activeSection)
                      if (currentIdx < docSections.length - 1) {
                        setActiveSection(docSections[currentIdx + 1].id)
                      }
                    }}
                    disabled={docSections.findIndex((s) => s.id === activeSection) === docSections.length - 1}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
