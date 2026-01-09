"use client"

import { Button, ButtonProps } from "@/components/ui/button"
import { toast } from "sonner"

interface ActionButtonProps extends ButtonProps {
    actionLabel?: string
    successMessage?: string
}

export function ActionButton({
    children,
    actionLabel = "Done",
    successMessage = "Action completed successfully",
    onClick,
    ...props
}: ActionButtonProps) {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()

        toast.info(actionLabel + "...", {
            duration: 1000,
        })

        // Simulate loading/action
        setTimeout(() => {
            toast.success(successMessage)
        }, 800)

        if (onClick) onClick(e)
    }

    return (
        <Button onClick={handleClick} {...props}>
            {children}
        </Button>
    )
}
