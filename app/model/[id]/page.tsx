import Image from "next/image"
import { MapPin, Info } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FEATURED_MODELS } from "@/lib/data"

export default async function ModelPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const model = FEATURED_MODELS.find(m => m.id === id) || FEATURED_MODELS[0]

    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            {/* Hero Full Height for model? Or standard cover? Let's go with standard cover style */}
            <div className="relative h-[350px] w-full bg-zinc-200">
                <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent pt-20 text-white">
                    <h1 className="text-3xl font-bold">{model.name}</h1>
                    <div className="flex items-center text-sm font-medium opacity-90">
                        <MapPin className="h-4 w-4 mr-1" /> {model.location} • {model.height}
                    </div>
                </div>
            </div>

            <div className="px-4 py-6">
                {/* Stats/Measurements */}
                <div className="flex justify-between bg-zinc-50 p-4 rounded-xl mb-6">
                    <div className="text-center">
                        <span className="block text-xs text-muted-foreground uppercase">Bust</span>
                        <span className="font-semibold text-sm">32"</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-xs text-muted-foreground uppercase">Waist</span>
                        <span className="font-semibold text-sm">24"</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-xs text-muted-foreground uppercase">Hips</span>
                        <span className="font-semibold text-sm">35"</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-xs text-muted-foreground uppercase">Shoe</span>
                        <span className="font-semibold text-sm">8</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-xs text-muted-foreground uppercase">Eye</span>
                        <span className="font-semibold text-sm">Brn</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                    <Button variant="outline" className="w-full">Message</Button>
                    <Button className="w-full bg-brand-pink text-white hover:bg-brand-pink/90">Book Model</Button>
                </div>

                {/* Portfolio */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Portfolio</h3>
                        <div className="flex gap-2">
                            <Badge variant="secondary">All</Badge>
                            <Badge variant="outline">Polaroids</Badge>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        {/* Masonry-ish grid */}
                        <div className="space-y-2">
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-100">
                                <Image src={model.image} alt="Portfolio" fill className="object-cover" />
                            </div>
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-100">
                                <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" alt="Portfolio" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="space-y-2 pt-8">
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-100">
                                <Image src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop" alt="Portfolio" fill className="object-cover" />
                            </div>
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-100">
                                <Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" alt="Portfolio" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
