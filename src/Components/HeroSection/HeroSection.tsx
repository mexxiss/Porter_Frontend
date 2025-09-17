import { Truck, Package, MapPin, Clock } from "lucide-react";
import img5 from "../../assets/images/img5.png"

const HeroSection = () => {
    const services = [
        { icon: Truck, title: "Express Delivery", desc: "Same-day delivery" },
        { icon: Package, title: "Package Service", desc: "Secure handling" },
        { icon: MapPin, title: "City-wide", desc: "All locations" },
        { icon: Clock, title: "24/7 Support", desc: "Always available" },
    ];
    return (
        <section className="relative flex items-center justify-center bg-blue-50 overflow-hidden py-12">
            <div className="absolute inset-0 z-0">
                <img
                    src={img5}
                    alt="Delivery logistics background"
                    className="w-full h-full object-contain opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-hero/80"></div>
            </div>

            <div className="container relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
                        Lightning Fast
                        <span className="block text-primary">
                            Delivery
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                        Experience the future of logistics with our AI-powered delivery network
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button className="btn1">
                            Start Shipping Now
                        </button>
                        <button className="btn2">
                            Track Package
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="p-4 bg-white border border-border rounded-md shadow-soft hover:shadow-medium transition-all duration-300 group">
                            <service.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                            <h3 className="font-semibold text-card-foreground mb-1">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroSection