import Image from "next/image"
import { Search, PenSquare } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"
import { MESSAGES } from "@/lib/data"

export default function InboxPage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            <div className="px-4 py-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Inbox</h1>
                    <PenSquare className="h-5 w-5" />
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-4 border-b mb-4 pb-2">
                    <div className="font-semibold text-foreground border-b-2 border-black pb-2 -mb-2.5">Primary</div>
                    <div className="text-muted-foreground">General</div>
                    <div className="text-muted-foreground">Requests</div>
                </div>

                {/* List */}
                <div className="space-y-1">
                    {MESSAGES.map((msg) => (
                        <div key={msg.id} className="flex gap-4 py-3 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 cursor-pointer -mx-4 px-4">
                            <div className="relative h-12 w-12 flex-none">
                                <Image src={msg.avatar} alt={msg.sender} fill className="object-cover rounded-full" />
                                {msg.unread && <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-brand-pink border-2 border-white" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-semibold text-sm truncate">{msg.sender}</h3>
                                    <span className="text-xs text-muted-foreground flex-none ml-2">{msg.time}</span>
                                </div>
                                <p className={`text-sm truncate ${msg.unread ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                                    {msg.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
