import Link from "next/link"
import { MoreHorizontal, Search, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="flex h-14 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="bg-black text-white text-xs font-bold p-1 px-1.5 rounded-sm">M</div>
                    <span className="font-bold text-sm tracking-wide">MODE</span>
                </Link>

                <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                        <Link href="/inbox">
                            <MessageSquare className="h-5 w-5" />
                            <span className="sr-only">Inbox</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                        <MoreHorizontal className="h-5 w-5" />
                        <span className="sr-only">Menu</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
