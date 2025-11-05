
import Hero from "../Hero"
import Section from "../Section"
import heroImage from "../imgs/heros/home.webp";
import { plans } from "../Globals";
import { useEffect } from "react";

function Plans() {

    useEffect(() => {
        document.title = 'Affordable All in One Website Plans | Webspective';
    }, []);

    return (
        <>
            <Hero header="Choose the Perfect Plan for Your Vision" subHeading="Transparent pricing, flexible options, and everything you need to launch." heroImage={heroImage} />

            <Section header="All of Our Website Development Plans">
                <div className="grid grid-cols-4 gap-6">
                    {plans}
                </div>

                <p>Didn't find what you were looking for? Check under <a href="/services">Services</a> for it instead!</p>
            </Section>
            <Section header="What Our Plans Include">
                <p className="text-lg">
                    Our Webspective plans are structured packages that combine everything you need to launch and grow your online presence. Each plan includes a complete set of web design and development services tailored to your project's size, goals, and budget.
                    <br />
                    <br />
                    From custom website design and responsive layouts to SEO optimization, content integration, and ongoing support, every plan is designed to deliver long-term value. We build each site to be fast, mobile-friendly, and easy to manage, giving you full control once it's live.
                    <br />
                    <br />
                    Whether you're looking for a starter website, a business plan with advanced features, or a premium e-commerce solution, our plans make it easy to understand what you're getting and how it helps your brand grow online.
                </p>
            </Section>
            <Section header="Our Approach to Pricing">
                <p className="text-lg">
                    At Webspective, we believe that professional web design and custom website development should be accessible to businesses of every size. Our affordable website plans are built to scale with you, from startups and small businesses to growing brands and e-commerce companies.
                    <br />
                    <br />
                    We price our plans based on value, transparency, and long-term results, not just features. Each package reflects the expertise and creativity that go into building responsive, SEO-friendly websites tailored to your goals. Whether you need a simple business website, a landing page, or a custom e-commerce solution, we deliver results that align with your budget and vision.
                    <br />
                    <br />
                    Our mission is to make web development simple, fair, and effective, empowering you to grow your online presence with confidence through a site that's fast, secure, and built to perform.
                </p>
            </Section>
        </>
    )
}

export default Plans