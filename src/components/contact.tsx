"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Send, User } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background relative">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
                    <p className="text-muted-foreground">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-secondary/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm"
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                                    <User className="w-4 h-4 text-primary" /> Name
                                </label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-primary" /> Email
                                </label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-primary" /> Message
                            </label>
                            <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px]" />
                        </div>
                        <Button className="w-full md:w-auto" size="lg">
                            <Send className="w-4 h-4 mr-2" /> Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
