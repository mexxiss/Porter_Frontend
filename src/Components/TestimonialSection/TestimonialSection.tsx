import { Quote, Star } from "lucide-react"

const TestimonialSection = () => {
    return (
        <section className="py-10 md:py-12 lg:py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="container">
                <div className="text-center">
                    <div className="mb-8">
                        <Quote className="w-16 h-16 mx-auto text-primary mb-6" />
                        <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-8 bg-white border border-border rounded-md shadow-medium">
                            <blockquote className="text-xl font-medium text-card-foreground mb-6">
                                "SwiftMove has revolutionized our supply chain operations. Their cutting-edge logistics platform helped us achieve a 40% reduction in delivery times while maintaining 99.9% accuracy."
                            </blockquote>

                            <div className="text-center">
                                <div className="font-semibold text-lg text-card-foreground">
                                    Sarah Chen
                                </div>
                                <div className="text-secondary/60">
                                    CEO, TechFlow Innovations
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-white border border-border rounded-md shadow-medium">
                            <blockquote className="text-xl font-medium text-card-foreground mb-6">
                                "SwiftMove has revolutionized our supply chain operations. Their cutting-edge logistics platform helped us achieve a 40% reduction in delivery times while maintaining 99.9% accuracy."
                            </blockquote>

                            <div className="text-center">
                                <div className="font-semibold text-lg text-card-foreground">
                                    Hung Chan
                                </div>
                                <div className="text-secondary/60">
                                    Director, TechFlow Innovations
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-primary rounded-md text-white max-w-4xl mx-auto">
                        <div className="text-sm font-medium mb-2 opacity-90">BREAKING NEWS</div>
                        <h3 className="text-2xl font-bold mb-4">
                            SwiftMove Secures $50M Series B Funding
                        </h3>
                        <p className="text-white/90 max-w-2xl mx-auto">
                            Leading the next generation of logistics technology with AI-powered route optimization
                            and sustainable delivery solutions. The funding round was led by Global Ventures and
                            will accelerate our expansion to 100+ cities by 2025.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection