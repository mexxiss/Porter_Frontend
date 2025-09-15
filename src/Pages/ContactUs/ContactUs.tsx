import { Mail, MapPin, Phone } from "lucide-react"
import img1 from "../../assets/images/img1.png"

const ContactUs = () => {
    return (
        <div>
            <section className="bg-blue-50 py-16">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Contact Us
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        At SwiftMove, we make your moving journey seamless and stress-free. With our
                        professional team, reliable service, and attention to every detail
                    </p>
                    <button className="btn1 mx-auto">
                        Contact Us
                    </button>
                </div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Company Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">DISCOVER US</h2>
                                <p className="text-muted-foreground mb-8">
                                    Swift Move has developed within the fast-moving world of the logistics experience in Australia.
                                    Founded with a vision to deliver exceptional service, we specialize in creating stress-free
                                    moving solutions for individuals and families.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">VISIT US</h3>
                                <div className="flex items-start space-x-3 mb-6">
                                    <MapPin className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <p className="text-foreground font-medium">Office no. G-02, 2134 Byrd Lane, Las Cruces, NM, 88001,</p>
                                        <p className="text-muted-foreground">Doña Ana County</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground mb-6">
                                    Feel free to get in touch with us through our channels:
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">EMAIL US</h4>
                                    <div className="flex items-center space-x-2">
                                        <Mail className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">move@gmail.com</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">CALL US</h4>
                                    <div className="flex items-center space-x-2">
                                        <Phone className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">(302) 555-0107</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="bg-blue-50/80 border-accent/20 rounded-lg">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Contact Form</h3>
                                <p className="text-muted-foreground mb-6">
                                    Please share your message with us, we'll reply your question
                                    between 23-48 hours
                                </p>

                                <form className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                placeholder="Your Name"
                                                className="bg-background border-input"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                placeholder="Last Name"
                                                className="bg-background border-input"
                                            />
                                        </div>
                                    </div>

                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-background border-input"
                                    />

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <input
                                            placeholder="Phone Number"
                                            className="bg-background border-input"
                                        />
                                        <select>
                                            <option value="City" hidden>City</option>
                                            <option value="sydney">Sydney</option>
                                            <option value="melbourne">Melbourne</option>
                                            <option value="brisbane">Brisbane</option>
                                            <option value="perth">Perth</option>
                                            <option value="adelaide">Adelaide</option>
                                            <option value="canberra">Canberra</option>
                                        </select>
                                    </div>

                                    <textarea
                                        placeholder="Message"
                                        rows={4}
                                        className="bg-background border-input w-full"
                                    />

                                    <button
                                        type="submit"
                                        className="btn1 w-full"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container">
                    <div className="py-12 px-8 bg-primary rounded-2xl">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Your Trusted Movers for a Hassle-Free Experience
                                </h2>
                                <p className="text-white/90 mb-6 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident.
                                </p>
                                <p className="text-white/90 mb-8">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which don't look
                                    even slightly believable.
                                </p>
                                <button
                                    className="btn2 !border-white !text-white hover:!bg-white hover:!text-primary"
                                >
                                    Contact Us
                                </button>
                            </div>

                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={img1}
                                        alt="Professional movers delivering packages"
                                        className="w-full h-full max-h-[450px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs