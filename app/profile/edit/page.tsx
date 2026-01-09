"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/Header"

export default function EditProfilePage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            toast.success("Profile updated")
            router.push("/profile")
        }, 1000)
    }

    return (
        <main className="min-h-screen bg-background pb-20">
            {/* Custom Header for Edit Flow */}
            <div className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md px-4 h-14 flex items-center justify-between">
                <Button variant="ghost" className="px-0 hover:bg-transparent text-base" onClick={() => router.back()}>Cancel</Button>
                <span className="font-bold text-sm">Edit Profile</span>
                <Button variant="ghost" className="px-0 hover:bg-transparent text-brand-pink font-semibold text-base" onClick={handleSubmit}>
                    {isLoading ? "Saving..." : "Done"}
                </Button>
            </div>

            <div className="p-6 flex flex-col items-center border-b">
                <div className="h-24 w-24 rounded-full bg-zinc-100 mb-3 relative overflow-hidden">
                    {/* Placeholder Avatar */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100" />
                </div>
                <span className="text-brand-pink font-semibold text-sm cursor-pointer">Change Profile Photo</span>
            </div>

            <form className="px-4 py-2 space-y-4">
                <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Name</label>
                    <input type="text" defaultValue="Elena Rossi" className="flex h-8 w-full border-b border-zinc-200 bg-transparent text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Username</label>
                    <input type="text" defaultValue="elenarossi_official" className="flex h-8 w-full border-b border-zinc-200 bg-transparent text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Bio</label>
                    <textarea defaultValue="Model @ Elite Milan | Traveller ✈️ | Coffee Lover ☕️" className="flex min-h-[60px] w-full border-b border-zinc-200 bg-transparent text-sm focus:outline-none focus:border-black transition-colors resize-none py-1" />
                </div>
                <div className="pt-4 border-t">
                    <div className="py-3 flex justify-between items-center cursor-pointer">
                        <span className="text-sm">Personal Information Settings</span>
                        <ChevronLeft className="h-4 w-4 rotate-180 text-muted-foreground" />
                    </div>
                </div>
            </form>
        </main>
    )
}
