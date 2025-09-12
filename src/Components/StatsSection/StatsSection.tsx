import { TrendingUp, Users, MapPin, Package } from "lucide-react";

const StatsSection = () => {
    const stats = [
        {
            icon: MapPin,
            number: "50+",
            label: "Cities Covered",
            description: "Growing network",
        },
        {
            icon: Users,
            number: "2M+",
            label: "Happy Customers",
            description: "Trusted worldwide",
        },
        {
            icon: Package,
            number: "10M+",
            label: "Deliveries Made",
            description: "And counting",
        },
        {
            icon: TrendingUp,
            number: "99.9%",
            label: "Success Rate",
            description: "Reliable service",
        },
    ];
    return (
        <section className="py-20 bg-secondary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 opacity-50"></div>
            <div className="absolute inset-0 bg-accent/5 opacity-50"></div>

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Growing Every Day
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Join millions who trust us with their most important deliveries
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-8 bg-primary backdrop-blur border border-white/20 rounded-md text-center group transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>

                            <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                                {stat.number}
                            </div>

                            <h3 className="text-xl font-semibold mb-2 text-white">
                                {stat.label}
                            </h3>

                            <p className="text-white/70">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsSection