import Image from "next/image"
import { Search } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"
import { FEATURED_MODELS, PHOTOGRAPHERS, AGENCIES_BOUTIQUES } from "@/lib/data"

export default function ExplorePage() {
    // Combine all images for a "feed" feel
    const allContent = [
        ...FEATURED_MODELS.map(m => ({ ...m, type: "Model", media: "image" })),
        ...PHOTOGRAPHERS.map(p => ({ ...p, type: "Photographer", media: "image" })),
        ...AGENCIES_BOUTIQUES.slice(0, 2).map(a => ({ ...a, type: "Creative", media: "image" })),
        // Add sample video items
        { id: "v1", image: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-32975-large.mp4", type: "Runway", media: "video" },
        { id: "v2", image: "https://assets.mixkit.co/videos/preview/mixkit-woman-turning-in-slow-motion-putting-on-a-jacket-42617-large.mp4", type: "Campaign", media: "video" },
    ].sort(() => Math.random() - 0.5)

    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            <div className="px-2 py-4">
                {/* Search Header for Explore */}
                <div className="relative mb-4 px-2">
                    <input
                        type="text"
                        placeholder="Search people, tags, places..."
                        className="flex h-10 w-full rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm text-center focus:text-left transition-all focus:bg-white focus:border-zinc-300 focus:outline-none"
                    />
                </div>

                {/* Masonry Grid (Simulated with columns) */}
                <div className="columns-2 md:columns-3 gap-2 space-y-2">
                    {allContent.map((item, i) => (
                        <div key={`${item.id}-${i}`} className="break-inside-avoid mb-2 relative group overflow-hidden rounded-md bg-zinc-100">
                            {/* Randomize aspect ratio for masonry feel */}
                            <div className={`relative w-full ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                                {item.media === "video" ? (
                                    <video
                                        src={item.image}
                                        autoPlay
                                        muted
                                        loop
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
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                                    <Badge variant="secondary" className="text-[10px] h-5 px-1.5 opacity-90">{item.type}</Badge>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate for demo volume */}
                    {allContent.map((item, i) => (
                        <div key={`${item.id}-dup-${i}`} className="break-inside-avoid mb-2 relative group overflow-hidden rounded-md bg-zinc-100">
                            <div className={`relative w-full ${i % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/5]"}`}>
                                {item.media === "video" ? (
                                    <video
                                        src={item.image}
                                        autoPlay
                                        muted
                                        loop
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
