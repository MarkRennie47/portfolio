"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-border/40 py-2 shadow-sm"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tighter flex items-center gap-2">
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">DevCreativ</span>
                    <span className="text-primary">/&gt;</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    {/* Mobile menu toggle would go here */}
                </div>
            </div>
        </header>
    )
}
