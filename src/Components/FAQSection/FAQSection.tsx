import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const FAQSection = () => {
    const faqs = [
        {
            question: "What makes SwiftMove different from other delivery services?",
            answer: "SwiftMove uses advanced AI-powered routing algorithms and real-time tracking to ensure faster, more reliable deliveries. Our network of verified drivers and 24/7 customer support sets us apart."
        },
        {
            question: "How do I track my package?",
            answer: "You can track your package in real-time using our mobile app or website. You'll receive SMS and email updates at every step of the delivery process, including live GPS tracking."
        },
        {
            question: "What are your delivery time guarantees?",
            answer: "We offer same-day delivery within city limits and next-day delivery for intercity packages. Express delivery is available within 2-4 hours for urgent packages."
        },
        {
            question: "Do you provide insurance for packages?",
            answer: "Yes, all packages are automatically insured up to $500. Additional insurance coverage is available for high-value items up to $10,000."
        },
        {
            question: "Which cities do you currently serve?",
            answer: "We currently operate in 50+ major cities across the country, with plans to expand to 100+ cities by 2025. Check our coverage map for specific locations."
        },
        {
            question: "How can I become a delivery partner?",
            answer: "Join our driver network by downloading the SwiftMove Driver app. Complete the verification process, vehicle inspection, and start earning with flexible working hours."
        }
    ];
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                            Frequently Asked Questions
                        </h2>
                        <p className="md:text-lg text-secondary/80">
                            Everything you need to know about our services
                        </p>
                    </div>

                    <Accordion collapseAll>
                        {faqs.map((faq, index) => (
                            <AccordionPanel
                                key={index}
                                className="border rounded-lg px-6"
                            >
                                <AccordionTitle className="hover:text-white">
                                    {faq.question}
                                </AccordionTitle>
                                <AccordionContent className="text-white/90">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionPanel>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQSection