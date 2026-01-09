import Image from "next/image"
import Link from "next/link"
import { Settings, Grid, Bookmark, UserSquare2 } from "lucide-react"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { FEATURED_MODELS } from "@/lib/data"
import { StatsBlock } from "@/components/ui/stats-block"

export default function ProfilePage() {
    // Mock current user data
    const user = {
        name: "Elena Rossi",
        username: "elenarossi_official",
        bio: "Model @ Elite Milan | Traveller ✈️ | Coffee Lover ☕️",
        avatar: FEATURED_MODELS[0].image,
        followers: "12.5k",
        following: "450",
        posts: "102",
    }

    // Mock posts grid
    const posts = [
        ...FEATURED_MODELS,
        ...FEATURED_MODELS,
        ...FEATURED_MODELS
    ].map((m, i) => ({ ...m, id: `post-${i}` }))

    return (
        <main className="min-h-screen bg-background pb-20">
            <Header />

            {/* Profile Header */}
            <div className="px-4 pt-6 pb-8 border-b">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-lg font-bold">{user.username}</h1>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Settings className="h-5 w-5" />
                    </Button>
                </div>

                <div className="flex items-center gap-8 mb-4">
                    {/* Avatar */}
                    <div className="relative h-20 w-20 rounded-full border p-1 mix-blend-multiply">
                        <Image src={user.avatar} alt={user.name} fill className="rounded-full object-cover p-0.5" />
                    </div>

                    {/* Stats */}
                    <div className="flex-1 flex justify-around text-center">
                        <div>
                            <div className="font-bold text-lg">{user.posts}</div>
                            <div className="text-xs text-muted-foreground">Posts</div>
                        </div>
                        <div>
                            <div className="font-bold text-lg">{user.followers}</div>
                            <div className="text-xs text-muted-foreground">Followers</div>
                        </div>
                        <div>
                            <div className="font-bold text-lg">{user.following}</div>
                            <div className="text-xs text-muted-foreground">Following</div>
                        </div>
                    </div>
                </div>

                {/* Bio */}
                <div className="space-y-1 mb-4">
                    <div className="font-semibold text-sm">{user.name}</div>
                    <div className="text-sm whitespace-pre-wrap">{user.bio}</div>
                </div>

                {/* User Stats/Details Block (Mock) */}
                <StatsBlock
                    stats={{
                        height: "180cm / 5'11\"",
                        bust: "81cm / 32\"",
                        waist: "61cm / 24\"",
                        hips: "89cm / 35\"",
                        shoe: "40 EU / 9 US",
                        hair: "Dark Brown",
                        eyes: "Green",
                    }}
                    title="My Measurements"
                />

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Link href="/profile/edit" className="flex-1">
                        <Button variant="secondary" className="w-full h-8 text-sm font-semibold bg-zinc-100 hover:bg-zinc-200">Edit Profile</Button>
                    </Link>
                    <Button variant="secondary" className="flex-1 h-8 text-sm font-semibold bg-zinc-100 hover:bg-zinc-200">Share Profile</Button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b h-10">
                <div className="flex-1 flex items-center justify-center border-b-2 border-black">
                    <Grid className="h-5 w-5" />
                </div>
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                    <Bookmark className="h-5 w-5" />
                </div>
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                    <UserSquare2 className="h-5 w-5" />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-0.5">
                {posts.map((post, i) => (
                    <div key={post.id} className="relative aspect-square bg-zinc-100">
                        <Image src={post.image} alt="Post" fill className="object-cover" />
                    </div>
                ))}
            </div>
        </main>
    )
}
