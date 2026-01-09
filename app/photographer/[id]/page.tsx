import Image from "next/image"
import { Globe, MapPin } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PHOTOGRAPHERS } from "@/lib/data"

export default async function PhotographerPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const photographer = PHOTOGRAPHERS.find(p => p.id === id) || PHOTOGRAPHERS[0]

    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            {/* Hero / Cover */}
            <div className="relative h-[200px] w-full bg-gradient-to-b from-zinc-200 to-zinc-400">
                <Image
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop"
                    alt="Cover"
                    fill
                    className="object-cover opacity-50 mix-blend-multiply"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="black" className="bg-black/60 backdrop-blur-md border-none text-white/90 font-normal">
                        <MapPin className="mr-1 h-3 w-3" />
                        {photographer.location}
                    </Badge>
                    <Badge variant="black" className="bg-black/60 backdrop-blur-md border-none text-white/90 font-normal">
                        Top Rated
                    </Badge>
                </div>

                <div className="absolute -bottom-12 left-4 z-10">
                    <div className="h-24 w-24 rounded-full p-1 bg-background">
                        <Image
                            src={photographer.image}
                            alt={photographer.name}
                            width={96}
                            height={96}
                            className="rounded-full object-cover h-full w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="px-4 mt-14">
                <h1 className="text-2xl font-bold">{photographer.name}</h1>
                <div className="flex flex-col text-xs text-muted-foreground mt-1 gap-1">
                    <span className="flex items-center"><Globe className="h-3 w-3 mr-1" /> Fashion & Editorial</span>
                    <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> Available worldwide</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">Editorial</Badge>
                    <Badge variant="secondary">Campaigns</Badge>
                    <Badge variant="secondary">Lookbooks</Badge>
                    <Badge variant="secondary">Runway</Badge>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 border-t border-b p-4">
                    <div className="text-center">
                        <div className="font-bold text-lg">140+</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Editorials</div>
                    </div>
                    <div className="text-center border-l border-r">
                        <div className="font-bold text-lg">8</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Years Exp.</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-lg">45k</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Followers</div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                    <Button variant="outline" className="w-full rounded-full">Contact</Button>
                    <Button className="w-full bg-brand-pink text-white hover:bg-brand-pink/90 rounded-full shadow-lg shadow-pink-200">Book Now</Button>
                </div>

                {/* Tabs */}
                <div className="mt-8 mb-4">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                        <Button size="sm" className="bg-black text-white rounded-full px-4">Portfolio</Button>
                        <Button variant="secondary" size="sm" className="rounded-full px-4 text-muted-foreground">Tearsheets</Button>
                        <Button variant="secondary" size="sm" className="rounded-full px-4 text-muted-foreground">Collections</Button>
                        <Button variant="secondary" size="sm" className="rounded-full px-4 text-muted-foreground">About</Button>
                    </div>

                    <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
                        <Badge variant="default" className="bg-brand-pink text-white border-transparent">All Work</Badge>
                        <Badge variant="secondary" className="bg-zinc-100 text-zinc-500 hover:bg-zinc-200">Studio</Badge>
                        <Badge variant="secondary" className="bg-zinc-100 text-zinc-500 hover:bg-zinc-200">Location</Badge>
                        <Badge variant="secondary" className="bg-zinc-100 text-zinc-500 hover:bg-zinc-200">B&W</Badge>
                    </div>
                </div>

                {/* Grid */}
                <h3 className="font-bold text-sm mb-3">Featured work <span className="float-right text-xs font-normal text-muted-foreground">View all</span></h3>
                <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-100 group">
                            <Image
                                src={`https://images.unsplash.com/photo-${i === 1 ? "1483985988355-763728e1935b" : i === 2 ? "1500917293891-ef795e70e1f6" : i === 3 ? "1515886657613-9f3515b0c78f" : "1534528741775-53994a69daeb"}?q=80&w=1000&auto=format&fit=crop`}
                                alt="Work"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute top-2 left-2">
                                <Badge className="bg-black/70 backdrop-blur-sm text-[10px] px-1.5 h-5 border-none">EDITORIAL</Badge>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-xs font-bold">Vogue Italia Summer</p>
                                <p className="text-zinc-300 text-[10px]">Cover story • Milan</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
