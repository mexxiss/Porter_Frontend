import { useState } from "react";
import img2 from "../../assets/images/img2.png"
import { Axe, Clock, Cog, Download, GitPullRequest, QrCode, Shield, Users, Zap } from "lucide-react";
import FAQSection from "../../Components/FAQSection/FAQSection";

const PackersAndMovers = () => {
    const [formData, setFormData] = useState({
        from: "",
        to: "",
        date: "",
        phone: "",
        service: "documents"
    });

    const features = [
        {
            icon: Shield,
            title: "Safe Shifting",
            description: "100% Safe and Secure with guaranteed protection"
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Trained professionals with years of experience"
        },
        {
            icon: Clock,
            title: "On Time Delivery",
            description: "Punctual service with real-time tracking"
        }
    ];

    const services = [
        {
            icon: GitPullRequest,
            title: "Rope Pulling Services",
            description: "Assistance from experts in handling heavy goods that need extra care",
            color: "text-blue-600"
        },
        {
            icon: Cog,
            title: "Installation of Appliances",
            description: "Un-installation and installation of electrical appliances by professionals",
            color: "text-green-600"
        },
        {
            icon: Zap,
            title: "Professional Electrician",
            description: "Expertise at your rescue",
            color: "text-purple-600"
        },
        {
            icon: Axe,
            title: "Professional Carpenter",
            description: "Professionally skilled carpenters in furniture handling",
            color: "text-purple-600"
        }
    ];

    const testimonials = [
        {
            name: "Vikas",
            location: "Gurgaon",
            image: "👨‍💼",
            text: "Porter's team was punctual, caring, and highly professional. Their self-sufficiency and humility impressed me, along with great customer support. Thank you!"
        },
        {
            name: "Pranita",
            location: "Mumbai",
            image: "👩‍💼",
            text: "Smooth experience with Porter's packers and movers! The team was fantastic, handling every detail. Highly recommend their services!"
        },
        {
            name: "Rita",
            location: "Delhi",
            image: "👩‍🦰",
            text: "Grateful for the punctuality and enthusiasm of the team. They handled items gently, took great care, and placed everything perfectly."
        },
        {
            name: "Virat Maun",
            location: "Delhi",
            image: "👩‍🦰",
            text: "Top-notch service! Packing, dismantling, handling, transportation, and re-assembling were excellent. Shifting homes felt incredibly easy. Kudos to the team!"
        }
    ];

    return (
        <>
            <section className="relative bg-blue-50/50 py-16 overflow-hidden">
                {/* <div className="absolute inset-0 bg-black/10"></div> */}
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        <div className="text-secondary lg:col-span-2">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Top Packers and Movers in India
                            </h1>
                            <p className="text-xl mb-8 text-secondary/70">
                                Find the best packers & movers service with hassle-free goods shifting and exceptional service.
                            </p>
                            <div>
                                <img src={img2} alt="" />
                            </div>
                        </div>

                        {/* Enhanced Booking Form */}
                        <div className="p-6 bg-white border border-border rounded-lg shadow-xl">
                            <h3 className="text-xl font-bold mb-4 text-secondary">Book Your Packers and Movers</h3>
                            <div className="space-y-2">
                                <div className="grid grid-cols-1 gap-2">
                                    <div>
                                        <label className="text-sm text-muted-foreground">From Location</label>
                                        <input
                                            placeholder="Enter pickup location"
                                            value={formData.from}
                                            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-muted-foreground">To Location</label>
                                        <input
                                            placeholder="Enter drop location"
                                            value={formData.to}
                                            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    <div>
                                        <label className="text-sm text-muted-foreground">Moving Date</label>
                                        <input
                                            placeholder="Your name"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="mt-1"
                                            type="date"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-muted-foreground">Service Type</label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="documents">Household Shifting</option>
                                        <option value="food">Office Relocation</option>
                                        <option value="electronics">Vehicle Transportation</option>
                                    </select>
                                </div>
                            </div>
                            <button className="btn1 w-full mt-4">
                                Check Price
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Features */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-10">
                        House Shifting with Best Packers and Movers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-8 border border-border rounded-lg shadow-xs hover:shadow-lg transition-shadow">
                                <div className="pt-6">
                                    <feature.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Extra Services */}
            <section className="py-16 bg-primary/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-3">Need an Extra Hand?</h2>
                    <p className="md:text-lg text-center text-secondary/60 mb-10">
                        Save time and energy with our dedicated on-demand workforce for your shifting and other requirements
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="text-center p-6 border border-border rounded-lg shadow-xs hover:shadow-lg transition-shadow">
                                <div className="pt-6">
                                    <service.icon className={`h-12 w-12 ${service.color} mx-auto mb-4`} />
                                    <h3 className="font-semibold mb-2">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Download Section */}
            <section className="py-16">
                <div className="container text-center">
                    <h2 className="text-4xl font-bold mb-4 text-primary">Think Logistics, Think Porter!</h2>
                    <p className="md:text-lg mb-8 text-secondary/60">Get the Porter app and enjoy our best-in-class service</p>

                    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <div className="w-32 h-32 mx-auto mb-6 bg-black flex items-center justify-center rounded-lg">
                            <QrCode className="w-20 h-20 text-white" />
                        </div>
                        <p className="text-muted-foreground mb-6">Scan to download our app!</p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn1">
                                <Download className="w-4 h-4 mr-2" />
                                App Store
                            </button>
                            <button className="btn2">
                                <Download className="w-4 h-4 mr-2" />
                                Play Store
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-primary/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Some words from our happy customers!</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-primary/5 border-white/20 text- p-6 rounded-lg">
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

            <FAQSection/>
        </>
    )
}

export default PackersAndMovers