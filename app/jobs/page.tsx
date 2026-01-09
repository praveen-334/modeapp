import Image from "next/image"
import { MapPin, Calendar, DollarSign, Filter } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ActionButton } from "@/components/ui/action-button"
import { JOBS } from "@/lib/data"

export default function JobsPage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            <div className="px-4 py-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Casting Calls</h1>
                    <Button variant="outline" size="sm" className="h-8 gap-2 rounded-full">
                        <Filter className="h-3.5 w-3.5" />
                        Filters
                    </Button>
                </div>

                {/* Categories / Tags scroll */}
                <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 -mx-4 px-4">
                    <Badge variant="default" className="bg-black text-white px-4 py-1.5 h-auto text-sm">All</Badge>
                    <Badge variant="secondary" className="px-4 py-1.5 h-auto text-sm bg-zinc-100 text-zinc-600">Paid</Badge>
                    <Badge variant="secondary" className="px-4 py-1.5 h-auto text-sm bg-zinc-100 text-zinc-600">Editorial</Badge>
                    <Badge variant="secondary" className="px-4 py-1.5 h-auto text-sm bg-zinc-100 text-zinc-600">Runway</Badge>
                    <Badge variant="secondary" className="px-4 py-1.5 h-auto text-sm bg-zinc-100 text-zinc-600">Commercial</Badge>
                </div>

                {/* Jobs List */}
                <div className="space-y-4">
                    {JOBS.map((job) => (
                        <div key={job.id} className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                            <div className="flex">
                                {/* Image */}
                                <div className="relative w-32 bg-zinc-200">
                                    <Image src={job.image} alt={job.title} fill className="object-cover" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold text-base">{job.title}</h3>
                                            <p className="text-sm text-brand-pink font-medium">{job.client}</p>
                                        </div>
                                        {/* <Badge variant="outline" className="text-[10px]">New</Badge> */}
                                    </div>

                                    <div className="mt-3 space-y-1.5">
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <MapPin className="mr-1 h-3 w-3" /> {job.location}
                                        </div>
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <Calendar className="mr-1 h-3 w-3" /> {job.date}
                                        </div>
                                        <div className="flex items-center text-xs font-semibold text-foreground">
                                            <DollarSign className="mr-1 h-3 w-3" /> {job.rate}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Tags */}
                            <div className="bg-zinc-50 px-4 py-2 flex gap-2 border-t items-center">
                                {job.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">{tag}</span>
                                ))}
                                <div className="ml-auto">
                                    <ActionButton variant="ghost" className="h-auto p-0 text-[10px] text-blue-600 font-medium hover:text-blue-700 hover:bg-transparent" actionLabel="Applying" successMessage="Application sent successfully!">Apply Now</ActionButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
