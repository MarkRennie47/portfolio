export function Footer() {
    return (
        <footer className="py-6 md:px-8 border-t border-border/40 bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2026 DevCreativ. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                    <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                    <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}
