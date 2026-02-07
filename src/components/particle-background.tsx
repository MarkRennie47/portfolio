"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = (canvas.width = window.innerWidth)
        let height = (canvas.height = window.innerHeight)

        // Particles config
        const particleCount = 50
        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []

        const createParticles = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                })
            }
        }

        createParticles();

        const resize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
            createParticles();
        }

        window.addEventListener("resize", resize)

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            // Color based on theme
            // If theme is 'dark' or system dark, use teal. Light mode use darker teal/slate.
            // Since we don't have easy access to resolvedTheme inside the animation loop efficiently without ref, we'll try to detect styles or just use a safe color.
            // Actually, let's just assume styles.
            // We can check the computed style of the primary color.

            // Simple logic:
            const isDark = document.documentElement.classList.contains("dark")
            ctx.fillStyle = isDark ? "rgba(45, 212, 191, 0.4)" : "rgba(13, 148, 136, 0.4)"; // Teal-400 vs Teal-600

            particles.forEach((p) => {
                p.x += p.vx
                p.y += p.vy

                // Wrap around
                if (p.x < 0) p.x = width
                if (p.x > width) p.x = 0
                if (p.y < 0) p.y = height
                if (p.y > height) p.y = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()
            })

            // Draw connections
            ctx.strokeStyle = isDark ? "rgba(45, 212, 191, 0.1)" : "rgba(13, 148, 136, 0.1)";
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationId)
        }
    }, [theme]) // Re-init on theme change

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 -z-10 w-full h-full pointer-events-none opacity-50"
        />
    )
}
