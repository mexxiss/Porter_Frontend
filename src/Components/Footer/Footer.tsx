import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/images/Logo.png"

const Footer = () => {
    const footerSections = [
        {
            title: "Quick Links",
            links: [
                {
                    title: "Driver Partner",
                    link: "/partners"
                },
                {
                    title: "Porter Enterprise",
                    link: "/enterprise"
                },
                {
                    title: "Two Wheelers",
                    link: "/two-wheelers"
                },
                {
                    title: "Trucks",
                    link: "/trucks"
                },
                {
                    title: "Packers & Movers",
                    link: "/packers-and-movers"
                },
            ]
        },
        {
            title: "Support",
            links: [
                {
                    title: "Contact Us",
                    link: "/contact-us"
                },
                {
                    title: "Privacy Policy",
                    link: "/privacy-policy"
                },
                {
                    title: "Terms of Service",
                    link: "/terms-of-service"
                },
                {
                    title: "Terms of Service - SSI",
                    link: "/terms-of-service-ssi"
                },
            ]
        },
        {
            title: "Company",
            links: [
                {
                    title: "About Us",
                    link: "/about-us"
                },
            ]
        },
        // {
        //     title: "Coverage",
        //     links: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"]
        // }
    ];
    return (
        <footer className="bg-slate-900 text-white py-10">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold mb-4 text-primary flex items-center gap-1">
                          <img src={logo} alt="" className="w-14" />  SwiftMove
                        </h3>
                        <p className="text-white/80 mb-6 leading-relaxed">
                            Revolutionizing logistics with AI-powered delivery solutions. Fast, reliable, and secure shipping worldwide.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span className="text-white/80">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span className="text-white/80">info@mexxiss.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span className="text-white/80">Gujrat, India</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <div key={index} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all cursor-pointer">
                                    <Icon className="w-5 h-5" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link to={link.link} className="text-white/70 hover:text-primary transition-colors">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="border-white/20 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-white/60 text-center md:text-left">
                        <p>&copy; 2025 SwiftMove. All rights reserved.</p>
                        {/* <p className="text-sm mt-1">Privacy Policy • Terms of Service • Cookie Policy</p> */}
                    </div>

                    <button className="btn1">
                        Download App
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer