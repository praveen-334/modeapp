"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, X } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FEATURED_MODELS, PHOTOGRAPHERS, AGENCIES_BOUTIQUES, CREATIVES, CATEGORIES } from "@/lib/data"

export default function ExplorePage() {
    // 1. Combine all content
    // Adding specific video items
    const videoItems = [
        { id: "v1", image: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-32975-large.mp4", type: "Runway", media: "video" as const, name: "NeonVibes" },
        { id: "v2", image: "https://assets.mixkit.co/videos/preview/mixkit-woman-turning-in-slow-motion-putting-on-a-jacket-42617-large.mp4", type: "Campaign", media: "video" as const, name: "StyleEdit" },
        { id: "v3", image: "https://assets.mixkit.co/videos/preview/mixkit-model-posing-in-front-of-a-mirror-32976-large.mp4", type: "Backstage", media: "video" as const, name: "BackstagePass" },
    ]

    const initialContent = [
        ...FEATURED_MODELS.map(m => ({ ...m, type: "Models", media: "image" as const })),
        ...PHOTOGRAPHERS.map(p => ({ ...p, type: "Photographers", media: "image" as const })),
        ...AGENCIES_BOUTIQUES.slice(0, 2).map(a => ({ ...a, type: "Agencies", media: "image" as const })),
        // Note: Agencies/Boutiques types in data.ts are "Model Agency" etc, mapping them to generalized category for filter simplicity
        ...CREATIVES.map(c => ({ ...c, type: "Creatives", media: "image" as const })),
        ...videoItems
    ].sort(() => Math.random() - 0.5)

    const [content, setContent] = useState(initialContent)
    const [activeFilter, setActiveFilter] = useState("All")
    const [showFilters, setShowFilters] = useState(false)

    // Filter Logic
    const handleFilter = (category: string) => {
        setActiveFilter(category)
        if (category === "All") {
            setContent(initialContent)
        } else {
            // Flexible matching: check if item type includes the category or matches exact
            // For now, simple exact match on our mapped 'type' above
            const filtered = initialContent.filter(item => {
                if (category === "Models") return item.type === "Models" || item.type === "Runway" // video items have type Runway etc
                if (category === "Creatives") return item.type === "Creatives"
                if (category === "Photographers") return item.type === "Photographers"
                if (category === "Agencies") return item.type === "Agencies"
                return true
            })
            setContent(filtered)
        }
        setShowFilters(false)
    }

    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            <div className="px-2 py-4">
                {/* Search & Filter Header */}
                <div className="flex gap-2 mb-4 px-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search talent, location, tags..."
                            className="flex h-10 w-full rounded-full border border-zinc-200 bg-zinc-100 pl-9 pr-4 text-sm focus:bg-white focus:border-zinc-300 focus:outline-none transition-all"
                        />
                    </div>
                    <Button variant="outline" size="icon" className="rounded-full shrink-0" onClick={() => setShowFilters(!showFilters)}>
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>

                {/* Active Filter Pills (Horizontal Scroll) */}
                <div className="flex gap-2 overflow-x-auto pb-4 px-2 scrollbar-hide">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => handleFilter(cat.name)}
                            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${activeFilter === cat.name
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <div className="px-2 mb-2 text-xs text-muted-foreground font-medium">
                    Showing {content.length} results
                </div>

                {/* Masonry Grid */}
                <div className="columns-2 md:columns-3 gap-2 space-y-2">
                    {content.map((item, i) => (
                        <div key={`${item.id}-${i}`} className="break-inside-avoid mb-2 relative group overflow-hidden rounded-md bg-zinc-100">
                            {/* Randomize aspect ratio for masonry feel */}
                            <div className={`relative w-full ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                                {item.media === "video" ? (
                                    <video
                                        src={item.image}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                ) : (
                                    <Image
                                        src={item.image}
                                        alt="Explore"
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                {/* Overlay Link */}
                                <Link href={item.type === "Models" ? `/model/${item.id}` : "/explore"} className="absolute inset-0 z-10">
                                    <span className="sr-only">View {item.type}</span>
                                </Link>

                                {/* Info Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none z-20">
                                    <div className="w-full">
                                        <Badge variant="secondary" className="text-[10px] h-5 px-1.5 opacity-90 mb-1">{item.type}</Badge>
                                        <div className="text-white text-xs font-bold drop-shadow-md truncate">{item.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filter Drawer (Mobile) */}
            {showFilters && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setShowFilters(false)}>
                    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 pb-safe animate-in slide-in-from-bottom-full duration-200" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold">Advanced Filters</h2>
                            <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-sm font-semibold">Location</label>
                                <div className="flex flex-wrap gap-2">
                                    {["Milan", "Paris", "London", "New York", "Berlin"].map(city => (
                                        <Badge key={city} variant="outline" className="cursor-pointer hover:bg-zinc-100 px-3 py-1.5">{city}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-semibold">Categories</label>
                                <div className="flex flex-wrap gap-2">
                                    {["Runway", "Editorial", "Commercial", "Fitness", "Influencer"].map(tag => (
                                        <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-zinc-100 px-3 py-1.5">{tag}</Badge>
                                    ))}
                                </div>
                            </div>

                            <Button className="w-full bg-brand-pink text-white" onClick={() => setShowFilters(false)}>Apply Filters</Button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
