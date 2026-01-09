import Image from "next/image"
import { MapPin, CheckCircle2 } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AGENCIES_BOUTIQUES, FEATURED_MODELS } from "@/lib/data"
import Link from "next/link"

export default async function AgencyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    // In a real app, fetch data. specific fallback for demo:
    const agency = AGENCIES_BOUTIQUES.find(a => a.id === id) || AGENCIES_BOUTIQUES[0]

    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            {/* Hero Image */}
            <div className="relative h-[250px] w-full bg-zinc-200">
                <Image
                    src={agency.image}
                    alt={agency.name}
                    fill
                    className="object-cover brightness-90"
                />
                <div className="absolute top-4 left-4">
                    <Badge variant="black" className="bg-black/60 backdrop-blur-md border-none text-white/90 font-normal">
                        <MapPin className="mr-1 h-3 w-3" />
                        {agency.location}
                    </Badge>
                </div>
                <div className="absolute top-4 right-4">
                    <Badge variant="black" className="bg-black/60 backdrop-blur-md border-none text-white/90 font-normal">
                        Verified agency
                    </Badge>
                </div>
            </div>

            <div className="px-4 -mt-12 relative z-10">
                {/* Logo/Identity */}
                <div className="flex justify-between items-end">
                    <div className="h-24 w-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
                        <span className="text-2xl font-black uppercase tracking-tighter">ELITE</span>
                    </div>
                    <div className="mb-2 flex gap-2">
                        {/* Social icons could go here */}
                    </div>
                </div>

                {/* Info */}
                <div className="mt-4 space-y-1">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold">{agency.name}</h1>
                        <CheckCircle2 className="h-5 w-5 text-blue-500 fill-white" />
                    </div>
                    <p className="text-sm text-muted-foreground">High fashion, editorial</p>
                    <Link href="#" className="text-xs text-blue-600 block pt-1">elitemodel.com</Link>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {["Women", "Men", "New Faces", "Worldwide"].map(tag => (
                        <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 border-t border-b p-4">
                    <div className="text-center">
                        <div className="font-bold text-lg">450+</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Models</div>
                    </div>
                    <div className="text-center border-l border-r">
                        <div className="font-bold text-lg">32</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Agents</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-lg">50+</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Years</div>
                    </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                    <Button variant="secondary" className="w-full">Message Booker</Button>
                    <Button className="w-full bg-black text-white hover:bg-zinc-800">Follow Agency</Button>
                </div>

                {/* Tabs */}
                <div className="mt-8">
                    <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide pb-2">
                        {["Roster", "New Faces", "Direct", "Creatives", "About"].map((tab, i) => (
                            <Button key={tab} variant={i === 0 ? "default" : "secondary"} size="sm" className={i === 0 ? "bg-black text-white px-6 rounded-full" : "bg-transparent hover:bg-zinc-100 text-muted-foreground rounded-full"}>
                                {tab}
                            </Button>
                        ))}
                    </div>

                    <div className="mt-4 flex flex-wrap justify-between items-center bg-zinc-50 p-2 rounded-lg">
                        <div className="flex space-x-2">
                            <Badge variant="black" className="rounded-full px-4 py-1">All</Badge>
                            <Badge variant="outline" className="border-none text-muted-foreground">Women</Badge>
                            <Badge variant="outline" className="border-none text-muted-foreground">Men</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">Sort: <span className="text-foreground font-medium">Popularity</span></div>
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between items-baseline mb-3">
                            <h3 className="font-semibold text-sm">Featured roster</h3>
                            <span className="text-xs text-muted-foreground">View all</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {/* Reuse models as Roster */}
                            {FEATURED_MODELS.map((model) => (
                                <div key={model.id} className="space-y-2">
                                    <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-zinc-200">
                                        <Badge className="absolute top-2 left-2 z-10 bg-black/50 backdrop-blur text-[10px] px-1.5 py-0">MAINBOARD</Badge>
                                        <Image src={model.image} alt={model.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm leading-none">{model.name}</p>
                                        <p className="text-[10px] text-muted-foreground mt-0.5">179 cm • Paris</p>
                                    </div>
                                </div>
                            ))}
                            {/* Add one more dummy to match grid */}
                            <div className="space-y-2">
                                <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-zinc-200">
                                    <Badge className="absolute top-2 left-2 z-10 bg-indigo-600/80 backdrop-blur text-[10px] px-1.5 py-0">DIRECT</Badge>
                                    <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop" alt="Elena R." fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm leading-none">Elena R.</p>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">178 cm • NYC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}
