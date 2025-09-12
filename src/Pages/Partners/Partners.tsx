import { BarChart3, CreditCard, HeadphonesIcon, Heart, MapPin, Phone, Shield, Star, TrendingUp, Truck, User, Users } from "lucide-react"
import heroDeliveryImage from "../../assets/images/hero-delivery.jpg"
import FAQSection from "../../Components/FAQSection/FAQSection";

const Partners = () => {
    const advantages = [
        {
            icon: Shield,
            title: "100% Secure Transport",
            description: "Advanced security measures with real-time monitoring and insurance coverage for all shipments."
        },
        {
            icon: TrendingUp,
            title: "Smart Analytics",
            description: "Get detailed insights and analytics on your delivery performance with our advanced tracking system."
        },
        {
            icon: Users,
            title: "24/7 Customer Support",
            description: "Round-the-clock customer service with dedicated support agents for all your delivery needs."
        }
    ];

    const benefits = [
        {
            icon: HeadphonesIcon,
            title: "Health care assistance",
            description: "Complete healthcare support for all our delivery partners and customers."
        },
        {
            icon: CreditCard,
            title: "Instant Payments",
            description: "Quick and secure payment processing with multiple payment options available."
        },
        {
            icon: BarChart3,
            title: "Live traffic tracking",
            description: "Real-time traffic updates and route optimization for faster deliveries."
        },
        {
            icon: Heart,
            title: "Dedicated full-time care",
            description: "Dedicated customer care team available 24/7 for all your delivery requirements."
        }
    ];

    const testimonials = [
        {
            name: "Rashid",
            location: "Gurgaon",
            image: "👨‍💼",
            text: "Offering discounts or getting a job in the porter itself was never this easy. People who are delivery workers definitely need to try this. My life has really become very easy."
        },
        {
            name: "Pranita",
            location: "Mumbai",
            image: "👩‍💼",
            text: "I've been using Porter for my business deliveries and it has completely transformed how I handle logistics. The tracking system is amazing and customer service is top-notch."
        },
        {
            name: "Rita",
            location: "Delhi",
            image: "👩‍🦰",
            text: "As a small business owner, Porter has been a game-changer. Quick deliveries, reliable service, and affordable pricing. Highly recommended for anyone in business."
        }
    ];
    return (
        <div>
            <section className="relative bg-blue-50 py-16 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroDeliveryImage}
                        alt="Delivery logistics background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-hero/80"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        <div className="space-y-8 col-span-2">
                            <div className="space-y-4">
                                <span className="text-sm px-4 py-2">
                                    🚚 Fastest Delivery Network
                                </span>
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                    Attach trucks or bike!!!
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    Turn the city by decreasing goods carrier and packages. Get a quick time of fast free delivery job.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="btn1">
                                    Download App
                                </button>
                                <button className="btn2">
                                    Learn More
                                </button>
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex items-center gap-2">
                                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                                    <span className="text-sm font-medium">4.8 Rating</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-medium">50K+ Users</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative ">
                            <div className="bg-white rounded-2xl p-8 shadow-strong relative z-10 shadow-xl">
                                <h3 className="text-xl font-semibold mb-6 text-center">Attach Vehicle Now</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="driverName" className="flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                Driver Name
                                            </label>
                                            <input
                                                id="driverName"
                                                placeholder="Enter your full name"
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="flex items-center gap-2">
                                                <Phone className="h-4 w-4" />
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                placeholder="+91 9876543210"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="vehicleType" className="flex items-center gap-2">
                                                <Truck className="h-4 w-4" />
                                                Vehicle Type
                                            </label>
                                            <select>
                                                <option value="" hidden>Select vehicle type</option>
                                                <option value="bike">Bike</option>
                                                <option value="car">Car</option>
                                                <option value="mini-truck">Mini Truck</option>
                                                <option value="truck">Truck</option>
                                                <option value="tempo">Tempo</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="city" className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            City
                                        </label>
                                        <select>
                                            <option value="" hidden>Select your city</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="bangalore">Bangalore</option>
                                            <option value="pune">Pune</option>
                                            <option value="hyderabad">Hyderabad</option>
                                            <option value="chennai">Chennai</option>
                                            <option value="kolkata">Kolkata</option>
                                            <option value="gurgaon">Gurgaon</option>
                                        </select>
                                    </div>

                                    <button className="w-full mt-6 btn1 text-white">
                                        Register Vehicle & Start Earning
                                    </button>

                                    <div className="text-center pt-2">
                                        <p className="text-xs text-muted-foreground">
                                            By registering, you agree to our terms and conditions
                                        </p>
                                    </div>
                                </form>
                            </div>

                            {/* Floating Images */}
                            {/* <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full overflow-hidden shadow-medium z-0">
                                <img
                                    src={deliveryWorkerImage}
                                    alt="Delivery worker"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-32 rounded-lg overflow-hidden shadow-medium z-0">
                                <img
                                    src={appInterfaceImage}
                                    alt="Mobile app interface"
                                    className="w-full h-full object-cover"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Porter Advantage */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">PORTER ADVANTAGE</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="text-center p-8 border border-border rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <div className="pt-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <advantage.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                                    <p className="text-muted-foreground">{advantage.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Making Your Life Easy */}
            <section className="py-16 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={heroDeliveryImage}
                                alt="Delivery management dashboard"
                                className="w-full rounded-2xl shadow-strong"
                            />
                            <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">MAKING YOUR LIFE EASY</h2>
                            <p className="opacity-80">
                                Boost your productivity, client, and commercial needs when you join
                                Porter delivery partner program. Work with our 1000+ delivery agents
                                who are available anytime, anywhere in your city for on-demand deliveries.
                            </p>
                            <p className="opacity-80">
                                Our innovative platform connects you with thousands of verified delivery
                                partners who provide reliable service. Track your deliveries in real-time
                                and enjoy seamless communication throughout the delivery process.
                            </p>
                            <p className="opacity-80">
                                Whether you need to send documents, packages, or bulk deliveries,
                                our diverse fleet and expert logistics team ensure your items reach
                                their destination safely and on time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Benefits */}
            <section className="py-16 bg-hero-bg">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Additional Benefits</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 border border-border rounded-lg">
                                <div className="pt-6">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <benefit.icon className="h-6 w-6 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">CHANGING LIFE OF PEOPLE</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white/10 border-white/20 text-white p-6 rounded-lg">
                                <div className="">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                            {testimonial.image}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{testimonial.name}</h3>
                                            <p className="text-sm opacity-80">{testimonial.location}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm opacity-90 leading-relaxed">{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection />
        </div>
    )
}

export default Partners