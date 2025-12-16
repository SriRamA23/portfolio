"use client"
import type { ContentCard as ContentCardType } from "@/lib/portfolio-data"
interface ContentCardProps {
  card: ContentCardType
  index: number
}
export function ContentCard({ card, index }: ContentCardProps) {
  return (
    <div
      className="card-3d group relative overflow-hidden animate-slide-up"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-0 bg-gradient-to-br ${card.color || "from-blue-500/10 to-cyan-500/10"}`} />
      </div>

      <div className="relative z-10 flex items-start gap-4">
        <div className="text-4xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          {card.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-[var(--neon-cyan)] mb-2 truncate group-hover:text-white transition-colors">
            {card.title}
          </h3>
          <p className="text-sm text-foreground/80 mb-3 line-clamp-2">{card.description}</p>
          {card.details && card.details.length > 0 && (
            <ul className="space-y-1">
              {card.details.map((detail, i) => (
                <li
                  key={i}
                  className="text-xs text-foreground/60 flex items-start gap-2 animate-typewriter"
                  style={{
                    animationDelay: `${index * 0.1 + i * 0.06}s`,
                  }}
                >
                  <span className="text-[var(--neon-blue)] mt-1 flex-shrink-0">▸</span>
                  <span className="group-hover:text-foreground/80 transition-colors">{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] w-0 group-hover:w-full transition-all duration-300" />
    </div>
  )
}
