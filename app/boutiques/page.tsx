import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AGENCIES_BOUTIQUES } from "@/lib/data"

export default function BoutiquesPage() {
    const boutiques = AGENCIES_BOUTIQUES.filter(a => a.type.includes("Boutique"))

    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            <div className="px-4 py-6">
                <h1 className="text-2xl font-bold mb-4">Boutiques</h1>

                {/* Search */}
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search boutiques..."
                        className="flex h-10 w-full rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {boutiques.map((boutique) => (
                        <Link href={`/boutique/${boutique.id}`} key={boutique.id} className="block group">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100 mb-2">
                                <Image src={boutique.image} alt={boutique.name} fill className="object-cover transition-transform group-hover:scale-105" />
                            </div>
                            <h3 className="font-semibold text-sm">{boutique.name}</h3>
                            <p className="text-xs text-muted-foreground">{boutique.location}</p>
                            <Button variant="outline" size="sm" className="w-full mt-2 h-7 text-xs rounded-full">Follow</Button>
                        </Link>
                    ))}
                    {/* Add duplicates for grid demo since we have limited mock data */}
                    {boutiques.map((boutique) => (
                        <Link href={`/boutique/${boutique.id}`} key={`${boutique.id}-dup`} className="block group">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100 mb-2">
                                <Image src={boutique.image} alt={boutique.name} fill className="object-cover transition-transform group-hover:scale-105" />
                            </div>
                            <h3 className="font-semibold text-sm">{boutique.name}</h3>
                            <p className="text-xs text-muted-foreground">{boutique.location}</p>
                            <Button variant="outline" size="sm" className="w-full mt-2 h-7 text-xs rounded-full">Follow</Button>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
