"use client"

import { useState, useCallback, useEffect } from "react"
import { Terminal } from "@/components/terminal"
import { ContentCard } from "@/components/content-card"
import { portfolioData, commands, helpText } from "@/lib/portfolio-data"

type ContentSection = keyof typeof portfolioData

interface CommandResult {
  success: boolean
  message: string
  section?: ContentSection
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState<ContentSection>("about")
  const [output, setOutput] = useState(helpText)
  const [isLoading, setIsLoading] = useState(false)
  const [commandCount, setCommandCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const processCommand = useCallback((input: string): CommandResult => {
    const command = input.toLowerCase().trim()

    const section = commands[command as keyof typeof commands] as ContentSection | undefined

    if (!section) {
      return {
        success: false,
        message: `✗ Command not found: "${command}"\n\nType 'help' or '0' for available commands.`,
      }
    }

    if (section === "help") {
      return {
        success: true,
        message: helpText,
        section: "help",
      }
    }

    if (!(section in portfolioData)) {
      return {
        success: false,
        message: `✗ Section "${section}" not found in portfolio data.`,
      }
    }

    return {
      success: true,
      message: `✓ Loading ${section}...\n\n${portfolioData[section].length} item${portfolioData[section].length !== 1 ? "s" : ""} found.`,
      section,
    }
  }, [])

  const handleCommand = useCallback(
    (input: string) => {
      setIsLoading(true)

      setTimeout(() => {
        const result = processCommand(input)

        if (result.success && result.section && result.section !== "help") {
          setCurrentSection(result.section)
        }

        setOutput(result.message)
        setCommandCount((prev) => prev + 1)
        setIsLoading(false)
      }, 300)
    },
    [processCommand],
  )

  const currentContent = currentSection === "help" ? [] : portfolioData[currentSection] || []

  const sectionTitle =
    currentSection === "help"
      ? "Portfolio"
      : currentSection === "all"
        ? "All"
        : currentSection.charAt(0).toUpperCase() + currentSection.slice(1)

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden" role="main">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/5 via-background to-[var(--neon-cyan)]/5" />
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(85, 102, 204, 0.1)",
            animation: "float-1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(102, 204, 204, 0.1)",
            animation: "float-2 25s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col md:flex-row gap-4 md:gap-6 p-3 md:p-4 lg:p-8">
        {/* Left side - Content display */}
        <div
          className="flex-1 flex flex-col min-h-0 order-2 md:order-1 lg:order-1 animate-fade-in"
          style={{ animationDelay: "0s" }}
        >
          <div className="mb-3 md:mb-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold neon-glow mb-2 animate-fade-in">
              {sectionTitle}
            </h1>
            <div
              className="h-1 w-20 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] rounded-full animate-fade-in"
              aria-hidden="true"
            />
          </div>

          {/* Content Stats */}
          {currentContent.length > 0 && (
            <div className="mb-3 md:mb-4 text-xs text-foreground/60 font-mono animate-fade-in">
              Showing {currentContent.length} item{currentContent.length !== 1 ? "s" : ""} • Commands executed:{" "}
              {commandCount}
            </div>
          )}

          <div className="flex-1 overflow-y-auto pr-2 md:pr-4 space-y-3 md:space-y-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div
                    className="text-3xl md:text-4xl mb-4"
                    style={{
                      animation: "spin 2s linear infinite",
                    }}
                    aria-hidden="true"
                  >
                    ⟳
                  </div>
                  <p className="text-foreground/60 text-sm md:text-base">Loading {currentSection}...</p>
                </div>
              </div>
            ) : currentContent.length > 0 ? (
              <div className="space-y-3 md:space-y-4">
                {currentContent.map((card, index) => (
                  <div key={card.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-slide-up">
                    <ContentCard card={card} index={index} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-foreground/60 text-center text-sm md:text-base">
                  Type a command in the terminal to get started
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Terminal */}
        <div
          className="w-full md:w-1/2 flex-shrink-0 order-1 md:order-2 lg:order-2 animate-fade-in"
          style={{
            animationDelay: "0.1s",
            height: "auto",
            maxHeight: "none",
          }}
        >
          <Terminal onCommand={handleCommand} output={output} />
        </div>
      </div>

      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 30px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, -30px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  )
}
