"use client"

import { motion } from "framer-motion"
import { Code, Palette, Terminal, Video } from "lucide-react"

const skills = {
    tech: [
        "HTML/CSS", "JavaScript/TypeScript", "React / Next.js", "Tailwind CSS", "Node.js", "Python", "Git"
    ],
    creative: [
        "Photoshop", "Premiere Pro", "After Effects", "Figma", "Logo Design", "UI/UX Design"
    ]
}

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-semibold flex items-center gap-2">
                            <Terminal className="text-primary w-6 h-6" />
                            Who I Am
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I'm a Computer Science undergraduate with a passion for building things that live on the internet.
                            My journey started with simple HTML pages and has evolved into building full-stack applications using modern technologies.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            But I'm not just about code. I have a strong background in digital creativity,
                            from editing videos to designing brand identities. I believe the best digital experiences happen
                            at the intersection of robust engineering and beautiful design.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Code className="text-primary w-5 h-5" /> Tech Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.tech.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm border border-border/50 hover:border-primary/50 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Palette className="text-primary w-5 h-5" /> Creative Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.creative.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm border border-border/50 hover:border-primary/50 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
