import { useState } from "react";
import img4 from "../../assets/images/img4.png"

const Trucks = () => {
    const [formData, setFormData] = useState({
        pickup: "",
        drop: "",
        name: "",
        phone: "",
        goodsType: "documents"
    });
    return (
        <>
            <section className="relative bg-blue-50/50 py-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={img4}
                        alt="Delivery logistics background"
                        className="w-full h-full object-contain opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-hero/80"></div>
                </div>
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="text-secondary lg:col-span-2">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Convenient Mini Truck Online Booking
                            </h1>
                            <p className="text-xl mb-8 text-secondary/70">
                                Are you looking for a reliable and affordable online truck booking service in India? Porter is your go-to logistics provider with economical rates.
                            </p>
                            <div>
                                <button className="btn2">Know More</button>
                            </div>
                        </div>

                        {/* Enhanced Booking Form */}
                        <div className="p-6 bg-white border border-border rounded-lg shadow-xl">
                            <h3 className="text-xl font-bold mb-4 text-secondary">Book Your Truck Delivery</h3>
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
        </>
    )
}

export default Trucks