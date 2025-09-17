import { ArrowRight, Zap, Shield, Globe, Smartphone } from "lucide-react";

const PremiumServices = () => {
    const services = [
        {
            icon: Zap,
            title: "Lightning Operations",
            description: "Streamline your business operations with our advanced logistics automation platform",
            color: "bg-yellow-500",
        },
        {
            icon: Shield,
            title: "Secure Transport",
            description: "End-to-end security protocols ensuring your packages arrive safely every time",
            color: "bg-green-500",
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Reliable goods transportation services covering over 50+ cities worldwide",
            color: "bg-primary",
        },
        {
            icon: Smartphone,
            title: "Smart Tracking",
            description: "Real-time package tracking with AI-powered delivery predictions and updates",
            color: "bg-cyan-600",
        },
    ];
    return (
        <section id="services" className="pt-10 md:pt-12 lg:pt-14 pb-20 bg-white">
            <div className="container">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        Our Premium Services
                    </h2>
                    <p className="md:text-lg text-secondary/60 max-w-2xl mx-auto">
                        Discover why thousands of businesses trust us with their logistics needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white border border-border rounded-md shadow-soft hover:shadow-strong transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <button className="flex items-center gap-1 group cursor-pointer">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PremiumServices