
const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container">
                <div className="flex ite justify-between py-3">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold text-primary">
                            SwiftMove
                        </h1>
                    </div>

                    <nav className=" items-center space-x-6">
                        <a href="#services" className="font-medium text-foreground/80 hover:text-primary-500 transition-colors">
                            Services
                        </a>
                        <a href="#about" className="font-medium text-foreground/80 hover:text-primary-500 transition-colors">
                            About
                        </a>
                        <a href="#contact" className="font-medium text-foreground/80 hover:text-primary-500 transition-colors">
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header