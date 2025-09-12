import HeroSection from '../../Components/HeroSection/HeroSection.tsx'
import PremiumServices from '../../Components/PremiumServices/PremiumServices.tsx'
import StatsSection from '../../Components/StatsSection/StatsSection.tsx'
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection.tsx'
import FAQSection from '../../Components/FAQSection/FAQSection.tsx'

const Home = () => {
    return (
        <>
            <HeroSection />
            <PremiumServices />
            <StatsSection />
            <TestimonialSection />
            <FAQSection />
        </>
    )
}

export default Home