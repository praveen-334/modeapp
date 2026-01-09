import Link from "next/link"
import { Camera, Briefcase, Store, User } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Card } from "@/components/ui/card"

const roles = [
    {
        id: "model",
        name: "Model",
        icon: User,
        description: "Create your portfolio and get discovered.",
    },
    {
        id: "agency",
        name: "Agency",
        icon: Briefcase,
        description: "Manage your roster and find new faces.",
    },
    {
        id: "photographer",
        name: "Photographer",
        icon: Camera,
        description: "Showcase your work and book shoots.",
    },
    {
        id: "boutique",
        name: "Boutique",
        icon: Store,
        description: "Promote your collection and store.",
    },
]

export default function OnboardingPage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            <div className="px-6 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Welcome to MODE</h1>
                    <p className="text-muted-foreground text-sm">Select your role to get started.</p>
                </div>

                <div className="grid gap-4">
                    {roles.map((role) => (
                        <Link href={`/onboarding/${role.id}`} key={role.id}>
                            <Card className="flex items-center p-4 hover:border-brand-pink transition-colors cursor-pointer group">
                                <div className="h-12 w-12 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-pink-50 group-hover:text-brand-pink transition-colors">
                                    <role.icon className="h-6 w-6" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-base">{role.name}</h3>
                                    <p className="text-xs text-muted-foreground">{role.description}</p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        Already have an account? <span className="font-medium text-foreground underline">Log in</span>
                    </p>
                </div>
            </div>
        </main>
    )
}
