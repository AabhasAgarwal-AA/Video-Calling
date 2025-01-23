
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { Testimonial } from "./Testimonial";
import { Faq } from "./Faq";
import { PartnerLogo } from "./PartnerLogo";


export function Home(){
    return <div>
        <NavBar />
        <Testimonial />
        <Faq />
        <PartnerLogo />
        <Footer />
    </div>
}