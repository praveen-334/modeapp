"use client"

import { Info } from "lucide-react"

interface StatsBlockProps {
    stats: Record<string, string | undefined>
    title?: string
}

export function StatsBlock({ stats, title = "Stats" }: StatsBlockProps) {
    if (!stats) return null;

    return (
        <div className="bg-zinc-50 rounded-lg p-4 mb-4 border">
            <div className="flex items-center gap-2 mb-3 text-brand-pink">
                <Info className="h-4 w-4" />
                <h3 className="text-sm font-bold uppercase tracking-wider">{title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {Object.entries(stats).map(([key, value]) => (
                    value ? (
                        <div key={key}>
                            <div className="text-[10px] uppercase text-muted-foreground font-semibold">{key}</div>
                            <div className="text-sm font-medium">{value}</div>
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    )
}
