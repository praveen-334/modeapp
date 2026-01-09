import Image from "next/image"
import { MapPin, Clock } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AGENCIES_BOUTIQUES } from "@/lib/data"

export default async function BoutiquePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    // Find a boutique or fallback
    const boutique = AGENCIES_BOUTIQUES.find(a => a.id === id && a.type.includes("Boutique")) || AGENCIES_BOUTIQUES.find(a => a.type.includes("Boutique")) || AGENCIES_BOUTIQUES[1]

    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            {/* Hero Image */}
            <div className="relative h-[280px] w-full bg-zinc-200">
                <Image
                    src={boutique.image}
                    alt={boutique.name}
                    fill
                    className="object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="black" className="bg-black/60 backdrop-blur-md border-none text-white/90 font-normal">
                        <MapPin className="mr-1 h-3 w-3" />
                        {boutique.location}
                    </Badge>
                </div>
                <div className="absolute top-4 right-4">
                    <Badge variant="black" className="bg-black/60 backdrop-blur-md border-none text-white/90 font-normal">
                        Open • 11:00 - 19:00
                    </Badge>
                </div>

                <div className="absolute -bottom-12 left-4 z-10">
                    <div className="h-24 w-24 bg-white rounded-full shadow-md p-1">
                        <div className="h-full w-full rounded-full bg-zinc-100 flex items-center justify-center overflow-hidden">
                            <span className="font-bold text-xs uppercase text-zinc-400">Logo</span>
                            {/* <Image src={...} /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 mt-16 pb-8">
                <h1 className="text-2xl font-bold">{boutique.name}</h1>
                <p className="text-sm text-muted-foreground font-medium">Luxury Concept Store</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary" className="bg-pink-50 text-pink-700 hover:bg-pink-100">Women</Badge>
                    <Badge variant="secondary" className="bg-pink-50 text-pink-700 hover:bg-pink-100">Emerging Designers</Badge>
                    <Badge variant="secondary" className="bg-pink-50 text-pink-700 hover:bg-pink-100">Editorial Friendly</Badge>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mt-6 border-b pb-6">
                    <div className="text-center w-full">
                        <div className="font-bold text-lg">45</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Designers</div>
                    </div>
                    <div className="h-8 w-px bg-border"></div>
                    <div className="text-center w-full">
                        <div className="font-bold text-lg">1.2k</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Pieces</div>
                    </div>
                    <div className="h-8 w-px bg-border"></div>
                    <div className="text-center w-full">
                        <div className="font-bold text-lg">85k</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Followers</div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                    <Button variant="outline" className="w-full rounded-full h-12">Message</Button>
                    <Button className="w-full bg-brand-pink text-white hover:bg-brand-pink/90 rounded-full h-12 shadow-lg shadow-pink-200">View Lookbook</Button>
                </div>

                {/* Categories Rail */}
                <div className="mt-8">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                        <Button variant="default" className="bg-black text-white rounded-full h-8 text-xs font-normal px-4">New arrivals</Button>
                        <Button variant="secondary" className="rounded-full h-8 text-xs font-normal px-4 bg-zinc-100 text-zinc-600">Designers</Button>
                        <Button variant="secondary" className="rounded-full h-8 text-xs font-normal px-4 bg-zinc-100 text-zinc-600">Accessories</Button>
                        <Button variant="secondary" className="rounded-full h-8 text-xs font-normal px-4 bg-zinc-100 text-zinc-600">Shoes</Button>
                    </div>
                </div>

                {/* Filter Row */}
                <div className="mt-4 flex flex-wrap justify-between items-center">
                    <div className="flex gap-2">
                        <div className="h-6 w-6 rounded-full bg-brand-pink text-white flex items-center justify-center text-[10px]">All</div>
                        <Badge variant="outline" className="font-normal border-none text-zinc-500">Runway</Badge>
                        <Badge variant="outline" className="font-normal border-none text-zinc-500">Campaign</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">Sort: <span className="text-foreground">Newest</span></div>
                </div>

                <h3 className="font-bold text-sm mt-6 mb-4">Pull-ready looks <span className="text-xs font-normal text-muted-foreground float-right pt-0.5">See all</span></h3>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="relative aspect-[3/4] bg-zinc-50 rounded-lg overflow-hidden flex items-center justify-center">
                            <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wide">New In</span>
                            {/* Placeholder for garment */}
                            <div className="w-2/3 h-2/3 bg-zinc-100 rounded-sm"></div>
                        </div>
                        <div>
                            <p className="text-[10px] text-muted-foreground uppercase">Jacquemus</p>
                            <p className="font-medium text-xs leading-tight">La Robe Saudade draped silk dress</p>
                            <div className="flex justify-between items-center mt-1">
                                <span className="font-bold text-xs">£720</span>
                                <div className="h-5 w-5 rounded-full bg-black text-white flex items-center justify-center text-xs">+</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="relative aspect-[3/4] bg-zinc-50 rounded-lg overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&w=1887&auto=format&fit=crop" alt="Bag" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-[10px] text-muted-foreground uppercase">The Row</p>
                            <p className="font-medium text-xs leading-tight">N/S Park leather tote bag</p>
                            <div className="flex justify-between items-center mt-1">
                                <span className="font-bold text-xs">£1,850</span>
                                <div className="h-5 w-5 rounded-full bg-black text-white flex items-center justify-center text-xs">+</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}
