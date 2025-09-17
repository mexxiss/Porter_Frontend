import { Bike, Building2, CheckCircle, Clock, DollarSign, Download, FileText, Heart, Package, QrCode, Shield, Smartphone, Utensils } from "lucide-react";
import { useState } from "react";
import FAQSection from "../../Components/FAQSection/FAQSection";
import img3 from "../../assets/images/img3.png"

const TwoWheelers = () => {
    const [formData, setFormData] = useState({
        pickup: "",
        drop: "",
        name: "",
        phone: "",
        goodsType: "documents"
    });

    const pricingTiers = [
        {
            distance: "0-4 km",
            price: "₹45",
            time: "20 mins",
            description: "Base fare inclusive of first 4km"
        },
        {
            distance: "4-8 km",
            price: "₹65",
            time: "35 mins",
            description: "Additional charges apply"
        },
        {
            distance: "8-15 km",
            price: "₹95",
            time: "50 mins",
            description: "Extended city coverage"
        }
    ];

    const deliveryTypes = [
        {
            title: "Documents",
            description: "Important papers, contracts, certificates",
            icon: FileText,
            examples: ["Legal documents", "Certificates", "ID cards", "Bank documents"]
        },
        {
            title: "Food Items",
            description: "Fresh meals, snacks, groceries",
            icon: Utensils,
            examples: ["Restaurant orders", "Groceries", "Medicines", "Fresh produce"]
        },
        {
            title: "Electronics",
            description: "Gadgets, phones, accessories",
            icon: Smartphone,
            examples: ["Mobile phones", "Laptops", "Chargers", "Headphones"]
        },
        {
            title: "Personal Items",
            description: "Keys, clothing, gifts",
            icon: Heart,
            examples: ["Forgotten keys", "Clothing", "Gifts", "Personal belongings"]
        }
    ];

    const twoWheelerFeatures = [
        {
            title: "Door-to-door Services",
            description: "Enjoy on-demand pickup & delivery services at your doorstep",
            icon: Building2
        },
        {
            title: "Get Instant Deliveries",
            description: "Get your documents, gadgets, food boxes, forgotten keys or other small packages picked up and delivered instantly",
            icon: Clock
        },
        {
            title: "Get Anything Delivered",
            description: "Be it a pot or multiple documents; send anything via trip by anywhere across the city",
            icon: Package
        },
        {
            title: "Reliable Consignment Delivery",
            description: "Book two-wheeler delivery services online and get same day delivery",
            icon: Shield
        }
    ];
    return (
        <>
            <section className="relative bg-blue-50/50 py-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={img3}
                        alt="Delivery logistics background"
                        className="w-full h-full object-contain opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-hero/80"></div>
                </div>
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-3 gap-12 ">
                        <div className="text-secondary lg:col-span-2">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Reliable Goods Transportation Services at your preferred location.
                            </h1>
                            <p className="text-xl mb-8 text-secondary/70">
                                Experience efficient & reliable Two-Wheelers goods transportation service.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button className="btn1">
                                    Book Now
                                </button>
                                <button className="btn2">
                                    Know More
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex gap-10 mt-16">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent-light">20kg</div>
                                    <p className="text-sm text-secondary/80">Max Weight</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent-light">₹45</div>
                                    <p className="text-sm text-secondary/80">Starting Price</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent-light">20min</div>
                                    <p className="text-sm text-secondary/80">Fast Delivery</p>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Booking Form */}
                        <div className="p-6 bg-white border border-border rounded-lg shadow-xl">
                            <h3 className="text-xl font-bold mb-4 text-secondary">Book Your Two-Wheeler Delivery</h3>
                            <div className="space-y-2">
                                <div className="grid grid-cols-1 gap-2">
                                    <div>
                                        <label className="text-sm text-muted-foreground">Pickup Address</label>
                                        <input
                                            placeholder="Enter pickup location"
                                            value={formData.pickup}
                                            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-muted-foreground">Drop Address</label>
                                        <input
                                            placeholder="Enter drop location"
                                            value={formData.drop}
                                            onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    <div>
                                        <label className="text-sm text-muted-foreground">Name</label>
                                        <input
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-muted-foreground">Phone Number</label>
                                        <input
                                            placeholder="Enter phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-muted-foreground">What best describes your goods?</label>
                                    <select
                                        value={formData.goodsType}
                                        onChange={(e) => setFormData({ ...formData, goodsType: e.target.value })}
                                    >
                                        <option value="documents">Documents</option>
                                        <option value="food">Food Items</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="personal">Personal Items</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <button className="btn1 w-full mt-4">
                                Get Fare Estimate
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two-Wheelers Details Section */}
            <section className="py-16 bg-background">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold mb-3 text-primary">Two-Wheelers from Porter</h2>
                        <p className="md:text-lg text-secondary/60">Fast, reliable, and affordable delivery solutions</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-1">
                            <div className="text-center p-8">
                                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                                    <Bike className="w-20 h-20 text-primary" />
                                </div>
                                <p className="text-muted-foreground text-lg">40cm³</p>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="p-8 border border-border rounded-lg shadow-xs">
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-3xl font-bold text-foreground">2 Wheeler</h3>
                                    <span className="bg-warning/10 text-warning text-lg px-4 py-2">20 kg</span>
                                </div>
                                <p className="text-2xl mb-4">
                                    <span className="font-bold text-foreground">Starting From ₹45</span>
                                </p>
                                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                                    Base fare is inclusive of 1st 4km distance & 20 minutes of other time. Pricing may vary based on locality. Please check route before placing trip, call for applicable rate and driver call free.
                                </p>
                                <button className="btn2">
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Tiers */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {pricingTiers.map((tier, index) => (
                            <div key={index} className="p-6 border border-border rounded-lg text-center shadow-xs hover:shadow-lg transition-all duration-300 group">
                                <div className="text-2xl font-bold text-primary mb-2">{tier.price}</div>
                                <div className="text-lg font-semibold text-foreground mb-2">{tier.distance}</div>
                                <div className="text-muted-foreground mb-4">{tier.time} delivery</div>
                                <p className="text-sm text-muted-foreground">{tier.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Can You Send Section */}
            <section className="py-16 bg-primary/5">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-primary">What Can You Send?</h2>
                        <p className="md:text-lg text-secondary/60 mt-3">We handle all kinds of small to medium packages</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {deliveryTypes.map((type, index) => (
                            <div key={index} className="p-6 border border-border rounded-lg shadow-xs hover:shadow-lg transition-all duration-300 group">
                                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <type.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2 text-center">{type.title}</h3>
                                <p className="text-sm text-muted-foreground text-center mb-4">{type.description}</p>
                                <div className="space-y-1">
                                    {type.examples.map((example, exampleIndex) => (
                                        <div key={exampleIndex} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-success" />
                                            <span className="text-xs text-muted-foreground">{example}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Two-Wheeler Section */}
            <section className="py-16 bg-background">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-primary">Why Choose Porter Two-Wheeler Delivery?</h2>
                        <p className="md:text-lg text-secondary/60 mt-3">Fast, reliable, and cost-effective delivery solutions</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {twoWheelerFeatures.map((feature, index) => (
                            <div key={index} className="p-6 border border-border rounded-lg shadow-xs text-center hover:shadow-lg transition-all duration-300 group">
                                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-foreground mb-3">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-16 bg-primary/5">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-primary">Key Features</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">Real-time Tracking</h3>
                                        <p className="text-muted-foreground">Track your delivery in real-time from pickup to drop-off with live GPS location.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">Secure Delivery</h3>
                                        <p className="text-muted-foreground">Every package is insured and handled with care by our verified delivery partners.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <DollarSign className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">Transparent Pricing</h3>
                                        <p className="text-muted-foreground">No hidden charges. Know exactly what you pay before booking your delivery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-primary">Service Coverage</h2>
                            <div className="p-8 border border-border rounded-lg shadow-xs bg-white">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">21+</div>
                                        <p className="text-muted-foreground">Cities Covered</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                                        <p className="text-muted-foreground">Service Available</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">15min</div>
                                        <p className="text-muted-foreground">Average Pickup</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">98%</div>
                                        <p className="text-muted-foreground">Success Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Download Section */}
            <section className="py-16">
                <div className="container text-center">
                    <h2 className="text-4xl font-bold mb-3 text-primary">Think Logistics, Think Porter!</h2>
                    <p className="md:text-lg mb-8 text-secondary/60">Get the Porter mobile app to start booking your deliveries!</p>

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

            <FAQSection />
        </>
    )
}

export default TwoWheelers