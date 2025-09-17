import { Link, NavLink } from "react-router"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container">
                <div className="flex ite justify-between py-3">
                    <div className="flex items-center space-x-4">
                        <Link to="/">
                            <h1 className="text-2xl font-bold text-primary">
                                SwiftMove
                            </h1>
                        </Link>
                    </div>

                    <nav className=" items-center space-x-6">
                        <NavLink to="/enterprise" className={({ isActive }) => `font-medium text-foreground/80 hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : ''}`}>
                            For Enterprise
                        </NavLink>
                        <NavLink to="/partners" className={({ isActive }) => `font-medium text-foreground/80 hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : ''}`}>
                            Driver Partner
                        </NavLink>
                        <NavLink to="/about-us" className={({ isActive }) => `font-medium text-foreground/80 hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : ''}`}>
                            About Us
                        </NavLink>
                        <NavLink to="/contact-us" className={({ isActive }) => `font-medium text-foreground/80 hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : ''}`}>
                            Contact
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header