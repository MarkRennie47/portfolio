"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
            <ParticleBackground />

            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 relative z-10 w-full">
                {/* Profile Photo Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-purple-500 p-[2px] shadow-lg shadow-primary/20"
                >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <span className="text-4xl text-muted-foreground">IMG</span>
                        {/* Replace with <Image> when available */}
                    </div>
                </motion.div>

                <div className="space-y-4 max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                    >
                        CS Student & <span className="text-primary">Creative Freelancer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto"
                    >
                        Bridge the gap between code and design. I build modern web applications and create stunning digital content.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button asChild size="lg" className="rounded-full group">
                        <Link href="#projects">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                        <Link href="#contact">
                            Contact Me
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex gap-6 mt-8 text-muted-foreground"
                >
                    <Link href="https://github.com/MarkRennie47" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></Link>
                    <Link href="https://www.linkedin.com/in/mark-rennie-dasam-866a022b6/" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></Link>
                    <Link href="mailto: rennie0407@gmail.com" className="hover:text-primary transition-colors"><Mail className="w-6 h-6" /></Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
            </motion.div>
        </section>
    )
}
