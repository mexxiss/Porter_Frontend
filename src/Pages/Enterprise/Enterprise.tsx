import { IdCard, Mail, Phone, User } from "lucide-react"
import heroDeliveryImage from "../../assets/images/hero-delivery.jpg"
import FAQSection from "../../Components/FAQSection/FAQSection";

const Enterprise = () => {

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
                                <span className="text-sm font-medium">
                                    PORTER ENTERPRISE
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                                    Reliable Goods Transportation <br /> Services with Seamless Control
                                </h1>
                                <p className="text-lg text-color1/60">
                                    Hassle-Free Enterprise Logistics |
                                    Centralised Management |
                                    Transparent Operations & Full Control
                                </p>
                            </div>
                        </div>

                        <div className="relative ">
                            <div className="bg-white rounded-2xl p-8 shadow-strong relative z-10 shadow-xl">
                                <h3 className="text-xl font-semibold mb-6 text-center">Fill Out for More Details</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                placeholder="Enter your full name"
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="companyName" className="flex items-center gap-2">
                                                <IdCard className="h-4 w-4" />
                                                Company Name
                                            </label>
                                            <input
                                                id="companyName"
                                                placeholder="Enter your company name"
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
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="flex items-center gap-2">
                                                <Mail className="h-4 w-4" />
                                                Company Name
                                            </label>
                                            <input
                                                id="email"
                                                placeholder="Enter your email ID"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>

                                    <button className="w-full mt-6 btn1 text-white">
                                        Get in Touch
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

            {/* Our Clients */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Clients</h2>
                    </div>
                    <div className="max-w-[1100px] mx-auto">
                        <div className="grid md:grid-cols-6 gap-8 mb-2">
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/ab_cofee_1_8be63636c0.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/Bankigo_1_904c227243.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/2_5bb4d2ecff/2_5bb4d2ecff.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/new_me_f339668575.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/1_f53af20efc/1_f53af20efc.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/Tata_cha_cf7145ace1.png" alt="" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/Nandana_place_1_e2a5df0549.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/cars_24_1_03667b70e1.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/olio_8b7bddc781.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="https://nest-platform-assets.porter.in/3_673f1e5be6/3_673f1e5be6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features We Offer */}
            <section className="py-16 bg-secondary/95 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features We Offer</h2>
                    </div>
                    <div>
                        <div className="grid grid-cols-5 gap-4">
                            <div className="col-span-3">
                                <div className="bg-white/10 rounded-2xl p-6 text-white">
                                    <h4 className="text-2xl font-medium">Unified Trip Details</h4>
                                    <p className="text-sm text-white/80 mt-1">Check all your goods transportation trip information in the city.</p>
                                    <div className="mt-6">
                                        <img src="https://nest-platform-assets.porter.in/Trip_Details_Desktop_59a39bc6ea.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="bg-white/10 rounded-2xl p-6 text-white">
                                    <h4 className="text-2xl font-medium">Payments through Prepaid Wallet</h4>
                                    <p className="text-sm text-white/80 mt-1">No cash reimbursement hassles, as all trips are prepaid.</p>
                                    <div className="mt-6">
                                        <img src="https://nest-platform-assets.porter.in/Business_Wallet_Desktop_f0eb40b5b6.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="bg-white/10 rounded-2xl p-6 text-white">
                                    <h4 className="text-2xl font-medium">Complete Clarity and Control</h4>
                                    <p className="text-sm text-white/80 mt-1">Monitor wallet usage with full visibility.</p>
                                    <div className="mt-6">
                                        <img src="https://nest-platform-assets.porter.in/Payments_Tab_Desktop_9195ba946f.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="bg-white/10 rounded-2xl p-6 text-white">
                                    <h4 className="text-2xl font-medium">Multi-User Access</h4>
                                    <p className="text-sm text-white/80 mt-1">Seamlessly add, remove, activate, or deactivate users to maintain unified logistics operations.</p>
                                    <div className="mt-6">
                                        <img src="https://nest-platform-assets.porter.in/Employee_Details_Desktop_77796c287a.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR GROWING NETWORK</h2>
                    </div>

                    <div className="grid grid-cols-3">
                        <div className="text-center">
                            <span className="text-5xl font-medium">21+</span>
                            <p className="uppercase font-medium text-color2 mt-2">cities</p>
                        </div>
                        <div className="text-center">
                            <span className="text-5xl font-medium">7.5L+</span>
                            <p className="uppercase font-medium text-color2 mt-2">DRIVER PARTNERS</p>
                        </div>
                        <div className="text-center">
                            <span className="text-5xl font-medium">10000+</span>
                            <p className="uppercase font-medium text-color2 mt-2">ENTERPRISE CLIENTS</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WE ARE TRANSFORMING CITIES */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">WE ARE TRANSFORMING CITIES</h2>
                        <p className="text-color1/80 mt-4">Our business is growing by the minute! We are now present in 21+ cities and have an extensive fleet base of more than 7.5L driver-partners! We have established ourselves as a trusted goods transportation service provider for big or small businesses, eCommerce merchants, supermarkets, Kirana store owners and many more for their business goods transportation services. Our loyal customers across 21+ cities serve as a testament of our top notch service and ever expanding presence.</p>
                    </div>

                    <div className="grid grid-cols-9 gap-6">
                        <div className="flex items-center justify-center flex-col gap-3">
                            <img src="https://nest-platform-assets.porter.in/Ahmedabad_888095801a/Ahmedabad_888095801a.webp" className="rounded-md" />
                            <span className="uppercase text-sm">Ahmedabad</span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3">
                            <img src="https://nest-platform-assets.porter.in/Bangalore_5e9b85d2c5/Bangalore_5e9b85d2c5.webp" className="rounded-md" />
                            <span className="uppercase text-sm">Bangalore</span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3">
                            <img src="https://nest-platform-assets.porter.in/Chandigarh_c8a34599b0/Chandigarh_c8a34599b0.webp" className="rounded-md" />
                            <span className="uppercase text-sm">Chandigarh</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">SOME WORDS FROM OUR HAPPY CUSTOMERS</h2>
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

export default Enterprise