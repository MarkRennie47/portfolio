"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink, Github, Play } from "lucide-react"

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive admin dashboard featuring real-time analytics, inventory management, and order tracking.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
        category: "Dev",
        link: "https://retailease-a45f0.web.app/",
        github: "https://github.com/MarkRennie47/Retail-Ease-main"
    },
    {
        title: "Neon Brand Identity",
        description: "Complete visual identity overhaul for a tech startup, including logo, color palette, and social media assets.",
        tags: ["Illustrator", "Photoshop", "Branding"],
        category: "Design",
        link: "https://velocitixai-sao9.vercel.app/"
    },
    {
        title: "Travel Vlog Edit",
        description: "Cinematic travel vlog edited with fast-paced cuts, color grading, and custom sound design.",
        tags: ["Premiere Pro", "After Effects", "Sound Design"],
        category: "Video",
        link: "#",
        video: true
    },
    // Add more placeholders as needed
]

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Featured Work</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                        A selection of my latest coding projects and creative works.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-card border-border/50 overflow-hidden hover:border-primary/50 transition-colors group">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    {/* Placeholder for Project Image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-background">
                                        <span className="text-muted-foreground font-semibold">
                                            {project.video ? "Video Preview" : "Project Preview"}
                                        </span>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        {project.link && (
                                            <Button size="icon" variant="ghost" className="rounded-full text-white hover:bg-white/20 hover:text-white">
                                                <ExternalLink className="w-6 h-6" />
                                            </Button>
                                        )}
                                        {project.github && (
                                            <Button size="icon" variant="ghost" className="rounded-full text-white hover:bg-white/20 hover:text-white">
                                                <Github className="w-6 h-6" />
                                            </Button>
                                        )}
                                        {project.video && (
                                            <Button size="icon" variant="ghost" className="rounded-full text-white hover:bg-white/20 hover:text-white">
                                                <Play className="w-6 h-6" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.category}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg">View All Projects</Button>
                </div>
            </div>
        </section>
    )
}
