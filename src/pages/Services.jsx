
import Hero from "../Hero"
import Section from "../Section"
import heroImage from "../imgs/heros/home.webp";
import { services } from "../Globals";
import { useEffect } from "react";

function Services() {

    useEffect(() => {
        document.title = 'Affordable and Fast Website Services | Webspective';
    }, []);

    return (
        <>
            <Hero header="Enhance Your Website with Custom Services" subHeading="Add powerful features and professional extras to any Webspective plan." heroImage={heroImage} />

            <Section header="Website Add-Ons and Enhancements">
                <div className="grid grid-cols-3 gap-6">
                    {services}
                </div>

                <p>Didn't find what you were looking for? Check under <a href="/plans">Plans</a> for it instead!</p>
            </Section>
            <Section header="What Our Services Are All About">
                <p className="text-lg">
                    At Webspective, our services are designed to enhance and expand any website plan. Each service acts as a professional add-on, giving your site extra functionality, improved performance, and a polished look. From SEO optimization and branding enhancements to custom integrations and ongoing support, our services let you tailor your website to meet your business goals.
                    <br />
                    <br />
                    We focus on delivering value, flexibility, and quality, so every service you choose helps your website stand out, attract more visitors, and perform at its best.
                </p>
            </Section>
        </>
    )
}

export default Services