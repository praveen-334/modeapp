import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, Plus } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FEATURED_MODELS, AGENCIES_BOUTIQUES, PHOTOGRAPHERS, CATEGORIES } from "@/lib/data"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />

      <div className="flex-1 space-y-8 px-4 py-6">
        {/* Hero / Search */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Discover Fashion Talent
            </h2>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Book models, agencies, <br /> boutiques & creatives.
            </h1>
            <p className="text-sm text-muted-foreground">
              The fashion network for models, agencies, boutiques, and photographers.
            </p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search models, agencies, boutiques..."
              className="flex h-10 w-full rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            {/* Tags/Categories pills */}
            {CATEGORIES.map((cat) => (
              <Badge key={cat.name} variant={cat.name === "Models" ? "default" : "secondary"} className="cursor-pointer">
                {cat.name}
              </Badge>
            ))}
          </div>
        </section>

        {/* Featured Models */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Featured models</h3>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">See all</Link>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
            {FEATURED_MODELS.map((model) => (
              <Link href={`/model/${model.id}`} key={model.id} className="w-[160px] flex-none space-y-3 block">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-sm leading-none">{model.name}</h4>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{model.height} • {model.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {model.tags.map(tag => (
                      <Badge key={tag} variant="black" className="text-[10px] h-5 px-1.5">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Agencies & Boutiques */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Agencies & boutiques</h3>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Explore all</Link>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
            {AGENCIES_BOUTIQUES.map((item) => (
              <Link href={item.type.includes("Boutique") ? `/boutique/${item.id}` : `/agency/${item.id}`} key={item.id} className="w-[240px] flex-none space-y-3 block">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.type}</p>
                  <p className="text-xs text-muted-foreground">{item.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Photographers */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Featured photographers</h3>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">View photographers</Link>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
            {PHOTOGRAPHERS.map((photog) => (
              <Link href={`/photographer/${photog.id}`} key={photog.id} className="w-[200px] flex-none space-y-3 block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={photog.image}
                    alt={photog.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{photog.name}</h4>
                  <p className="text-xs text-muted-foreground">{photog.specialty}</p>
                  <p className="text-xs text-muted-foreground">{photog.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
