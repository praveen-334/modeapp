"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Send, MoreHorizontal, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ActionButton } from "@/components/ui/action-button"

interface ReelItemProps {
    data: {
        id: string
        type: string
        image: string // URL to video or image
        media: "video" | "image"
        name?: string
    }
    isActive: boolean
}

export function ReelItem({ data, isActive }: ReelItemProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        if (data.media === "video" && videoRef.current) {
            if (isActive) {
                videoRef.current.currentTime = 0
                videoRef.current.play().catch(e => console.log("Autoplay blocked", e))
            } else {
                videoRef.current.pause()
            }
        }
    }, [isActive, data.media])

    const handleLike = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div className="relative h-full w-full bg-black snap-start shrink-0">
            {/* Media Background */}
            <div className="absolute inset-0 z-0">
                {data.media === "video" ? (
                    <video
                        ref={videoRef}
                        src={data.image}
                        loop
                        playsInline
                        muted // Start muted to allow autoplay usually, can implement toggle
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <Image
                        src={data.image}
                        alt="Reel"
                        fill
                        className="object-cover opacity-80"
                    />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-20 left-4 right-16 z-10 text-white">
                <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-full bg-zinc-200 relative overflow-hidden">
                        {/* Placeholder Avatar - in real app from data.avatar */}
                        <div className="absolute inset-0 bg-brand-pink" />
                    </div>
                    <span className="font-semibold text-sm drop-shadow-md">{data.name || "ModeUser"}</span>
                    <Button variant="outline" size="sm" className="h-6 text-[10px] bg-transparent text-white border-white/50 hover:bg-white/20 hover:text-white rounded-full px-2">Follow</Button>
                </div>
                <p className="text-sm line-clamp-2 drop-shadow-md">
                    Exploring the new collection. #fashion #mode #style
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs opacity-80">
                    <span>♫ Original Audio</span>
                </div>
            </div>

            {/* Side Actions */}
            <div className="absolute bottom-20 right-2 z-10 flex flex-col gap-4 items-center">
                <div className="flex flex-col items-center gap-1">
                    <Button variant="ghost" size="icon" className={`hover:bg-transparent ${isLiked ? "text-red-500" : "text-white"}`} onClick={handleLike}>
                        <Heart className={`h-7 w-7 ${isLiked ? "fill-current" : ""}`} />
                    </Button>
                    <span className="text-white text-xs font-medium">1.2k</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <Button variant="ghost" size="icon" className="hover:bg-transparent text-white">
                        <MessageCircle className="h-7 w-7" />
                    </Button>
                    <span className="text-white text-xs font-medium">45</span>
                </div>

                <Button variant="ghost" size="icon" className="hover:bg-transparent text-white">
                    <Send className="h-7 w-7" />
                </Button>

                <Button variant="ghost" size="icon" className="hover:bg-transparent text-white">
                    <MoreHorizontal className="h-7 w-7" />
                </Button>
            </div>
        </div>
    )
}
