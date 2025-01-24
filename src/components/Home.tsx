
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { Testimonial } from "./Testimonial";
import { Faq } from "./Faq";
import { PartnerLogo } from "./PartnerLogo";
import { Hero } from "./Hero";


export function Home(){
    return <div>
        <NavBar />
        <Hero />
        <PartnerLogo />
        <Testimonial />
        <Faq />
        <Footer />
    </div>
}