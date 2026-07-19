import Navbar from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import CTA from "../components/sections/CTA";
import Footer from "../components/common/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <CTA />
            </main>
            <Footer />
        </>
    );
}

export default Home;
