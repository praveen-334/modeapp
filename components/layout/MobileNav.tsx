"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Compass, Briefcase, ShoppingBag, MessageSquare, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    {
        name: "Discover",
        href: "/",
        icon: Compass,
    },
    {
        name: "Explore",
        href: "/explore",
        icon: Search,
    },
    {
        name: "Jobs",
        href: "/jobs",
        icon: Briefcase,
    },
    {
        name: "Boutiques",
        href: "/boutiques",
        icon: ShoppingBag,
    },
    {
        name: "Inbox",
        href: "/inbox",
        icon: MessageSquare,
    },
]

export function MobileNav() {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-md pb-safe">
            <div className="flex items-center justify-around h-16 px-2">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center space-y-1 text-xs font-medium transition-colors w-full h-full",
                                isActive
                                    ? "text-brand-pink"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
