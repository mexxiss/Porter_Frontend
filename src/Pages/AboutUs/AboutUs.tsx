import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section className="bg-blue-50 py-16">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        About Us
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-5xl mx-auto mb-8">
                        At SwiftMove, we are dedicated to revolutionizing the logistics industry by providing efficient and reliable transportation solutions. Our mission is to connect businesses with trusted drivers to ensure timely deliveries and exceptional service.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Founded in 2020, SwiftMove has quickly grown to become a leading platform for logistics and transportation services. Our team of experienced professionals is passionate about delivering innovative solutions that meet the evolving needs of our clients.
                    </p>
                    <div className="grid grid-cols-2 gap-6 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
                            <ul className="text-muted-foreground space-y-2">
                                <li><strong>Customer Focus:</strong> We prioritize our clients' needs and strive to exceed their expectations with every delivery.</li>
                                <li><strong>Integrity:</strong> We conduct our business with honesty and transparency, building trust with our clients and partners.</li>
                                <li><strong>Innovation:</strong> We continuously seek new ways to improve our services and leverage technology to enhance the logistics experience.</li>
                                <li><strong>Collaboration:</strong> We believe in the power of teamwork and work closely with our drivers and clients to achieve shared success.</li>
                            </ul>
                        </div>
                        <div>
                            <img src="https://nest-platform-assets.porter.in/about_us2_49cc9eda09.png" alt="" className='w-full h-auto rounded-lg' />
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 leading-11">India's Leading Goods Transport Agency | <br /> Revolutionizing Goods Delivery</h2>
                    </div>

                    <div className="grid grid-cols-3">
                        <div className="text-center">
                            <span className="text-5xl font-medium">2014</span>
                            <p className="uppercase font-medium text-color2 mt-2">YEAR FOUNDED</p>
                        </div>
                        <div className="text-center">
                            <span className="text-5xl font-medium">1.5+ Crore</span>
                            <p className="uppercase font-medium text-color2 mt-2">CUSTOMERS</p>
                        </div>
                        <div className="text-center">
                            <span className="text-5xl font-medium">2200+</span>
                            <p className="uppercase font-medium text-color2 mt-2">STRONG TEAM</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-16">
                <div className="container">
                    <div className="grid grid-cols-2 gap-8 items-center">
                        <div>
                            <img src="https://nest-platform-assets.porter.in/about_us2_49cc9eda09.png" alt="" className='w-full h-auto rounded-lg' />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose SwiftMove?</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                We understand that choosing a logistics partner is a critical decision for your business. Here are a few reasons why SwiftMove stands out:
                            </p>
                            <ul className="text-muted-foreground space-y-2">
                                <li><strong>Extensive Network:</strong> With a vast network of drivers and vehicles, we can accommodate a wide range of transportation needs.</li>
                                <li><strong>Real-Time Tracking:</strong> Our advanced tracking system allows you to monitor your shipments in real-time, providing peace of mind and transparency.</li>
                                <li><strong>Competitive Pricing:</strong> We offer cost-effective solutions without compromising on quality, ensuring you get the best value for your investment.</li>
                                <li><strong>Dedicated Support:</strong> Our customer support team is available 24/7 to assist you with any questions or concerns.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs