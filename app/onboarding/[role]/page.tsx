"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Upload, ChevronRight, Check } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function OnboardingForm() {
    const params = useParams()
    const router = useRouter()
    const role = params.role as string
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() // prevent reload
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            toast.success("Profile created successfully!", {
                description: "Welcome to the community."
            })
            router.push("/explore")
        }, 1500)
    }

    const roleTitle = role ? role.charAt(0).toUpperCase() + role.slice(1) : "Profile"

    return (
        <main className="min-h-screen bg-background pb-20 px-6 py-8">
            <div className="mb-8">
                <Badge variant="secondary" className="mb-4">Step 2 of 2</Badge>
                <h1 className="text-2xl font-bold mb-1">Create {roleTitle} Profile</h1>
                <p className="text-muted-foreground text-sm">Fill in your details to go live.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Avatar / Cover Upload */}
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 rounded-xl p-8 hover:bg-zinc-50 transition-colors cursor-pointer">
                    <div className="h-12 w-12 rounded-full bg-zinc-100 flex items-center justify-center mb-2">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium">Upload Cover/Profile Image</p>
                    <p className="text-xs text-muted-foreground">Supports JPG, PNG</p>
                </div>

                {/* Basic Info */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name / Display Name</label>
                        <input required type="text" placeholder="e.g. Elena Rossi" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Location</label>
                        <input required type="text" placeholder="e.g. Milan, Italy" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Bio</label>
                        <textarea placeholder="Tell us about yourself..." className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>
                </div>

                {/* Role Specific Fields */}
                {role === "model" && (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Height</label>
                            <input type="text" placeholder="e.g. 5'11" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Shoe Size</label>
                            <input type="text" placeholder="e.g. 39" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                        </div>
                    </div>
                )}

                {role === "photographer" && (
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Specialties</label>
                        <input type="text" placeholder="e.g. Editorial, Street Style (comma separated)" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                )}

                <Button type="submit" disabled={isLoading} className="w-full h-12 rounded-full bg-brand-pink text-white hover:bg-brand-pink/90 text-base">
                    {isLoading ? "Creating Profile..." : "Complete Setup"}
                </Button>
            </form>
        </main>
    )
}
