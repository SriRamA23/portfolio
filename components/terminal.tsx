"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { helpText } from "@/lib/portfolio-data"

interface TerminalProps {
  onCommand: (command: string) => void
  output: string
}

interface TerminalEntry {
  id: string
  type: "command" | "output"
  content: string
  timestamp: string
}


export function Terminal({ onCommand, output }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [terminalLog, setTerminalLog] = useState<TerminalEntry[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
  const entryCountRef = useRef(0)

  useEffect(() => {
    if (historyRef.current) {
      setTimeout(() => {
        historyRef.current?.scrollTo({
          top: historyRef.current.scrollHeight,
          behavior: "smooth",
        })
      }, 0)
    }
  }, [terminalLog])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (output && output !== helpText) {
      const newEntry: TerminalEntry = {
        id: `entry-${entryCountRef.current++}`,
        type: "output",
        content: output,
        timestamp: new Date().toLocaleTimeString(),
      }
      setTerminalLog((prev) => [...prev, newEntry])
    }
  }, [output])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const now = new Date().toLocaleTimeString()

      const commandEntry: TerminalEntry = {
        id: `entry-${entryCountRef.current++}`,
        type: "command",
        content: input.trim(),
        timestamp: now,
      }
      setTerminalLog((prev) => [...prev, commandEntry])

      setHistory([...history, input.trim()])
      setHistoryIndex(-1)
      onCommand(input.trim())
      setInput("")
    }
  }

  return (
    <div className="terminal-container h-full flex flex-col">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <div className="terminal-dot bg-red-500" />
          <div className="terminal-dot bg-yellow-500" />
          <div className="terminal-dot bg-green-500" />
        </div>
        <span className="ml-auto text-xs text-[var(--terminal-text)]/60 font-mono">Sri@portfolio ~ %</span>
      </div>

      <div className="terminal-help-section flex-shrink-0 border-b border-[var(--neon-cyan)]/20 p-3 md:p-4 bg-[var(--terminal-bg)]/50 backdrop-blur-sm">
        <div className="text-xs leading-relaxed whitespace-pre-wrap font-mono text-[var(--terminal-text)]/70 animate-fade-in">
          {helpText}
        </div>
      </div>

      <div ref={historyRef} className="terminal-history flex-1 overflow-y-auto">
        {terminalLog.length === 0 ? (
          <div className="p-3 md:p-4 text-xs text-[var(--terminal-text)]/50 font-mono animate-fade-in">
            Ready for commands...
          </div>
        ) : (
          terminalLog.map((entry, index) => (
            <div
              key={entry.id}
              className="border-b border-[var(--neon-cyan)]/10 p-3 md:p-4 animate-slide-up"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {entry.type === "command" ? (
                <div className="flex items-start gap-2 font-mono text-sm">
                  <span className="text-[var(--neon-cyan)] flex-shrink-0">$</span>
                  <span className="text-[var(--terminal-text)] break-words flex-1">{entry.content}</span>
                </div>
              ) : (
                <div className="whitespace-pre-wrap text-xs md:text-sm leading-relaxed font-mono">
                  {entry.content.split("\n").map((line, i) => (
                    <div
                      key={i}
                      className="text-[var(--terminal-text)]/80 animate-typewriter"
                      style={{
                        animationDelay: `${i * 0.02}s`,
                      }}
                    >
                      {line || "\u00A0"}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Terminal sstyle Input */}
      <form onSubmit={handleSubmit} className="border-t border-[var(--neon-cyan)]/20 p-3 md:p-4 flex-shrink-0">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-[var(--neon-cyan)]">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command..."
            className="terminal-input flex-1"
            autoComplete="off"
            spellCheck="false"
          />
          {!input && <span className="terminal-cursor" />}
        </div>
      </form>

      {/* Command History  */}
      {history.length > 0 && (
        <div className="border-t border-[var(--neon-cyan)]/10 px-3 md:px-4 py-2 text-xs text-[var(--terminal-text)]/40 font-mono animate-fade-in flex-shrink-0">
          {history.length} command{history.length !== 1 ? "s" : ""} Executed • Use ↑↓ to navigate history
        </div>
      )}
    </div>
  )
}
