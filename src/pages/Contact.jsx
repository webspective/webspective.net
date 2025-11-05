
import Hero from "../Hero"
import heroImage from "../imgs/heros/home.webp";
import { useEffect } from "react";

function Contact() {

    useEffect(() => {
        document.title = 'Contact Us | Webspective';
    }, []);

    const ctaButtons = [
        <a href="mailto:contact@webspective.net"><button>Email Us</button></a>,
    ]

    return (
        <>
            <Hero header="Contact Us" subHeading="Reach out with any questions or concerns you have!" ctaButtons={ctaButtons} heroImage={heroImage} />
        </>
    )
}

export default Contact