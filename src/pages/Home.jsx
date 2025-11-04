import { useState, useEffect, useRef, useMemo } from "react"
import Hero from "../Hero"
import Section from "../Section"
import heroImage from "../imgs/heros/home.webp";
import { plans, services } from "../Globals";

function Home() {

    const list = useMemo(() => {
        const arr = [
            "Dreamers",
            "Innovators",
            "Everyday People",
            "You",
            "Everyone",
            "Thinkers",
            "Visionaries",
            "Problem Solvers",

            "The Modern Web",
            "The Future",
            "The Next Generation",
            "Forward-Thinkers",
            "Digital Pioneers",
            "Creators of Tomorrow",
            "Connected Communities",
            "Bold Ideas",

            "Small Businesses",
            "Startups",
            "Entrepreneurs",
            "Local Brands",
            "E-Commerce Stores",
            "Agencies",
            "Corporate Teams",
            "Nonprofits",
            "Freelancers",
            "Organizations"
        ]
        const shuffledList = [...arr].sort(() => Math.random() - 0.5);

        return shuffledList

    }, [])

    const [subHeading, setSubHeading] = useState(list[0])

    const index = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            index.current = (index.current + 1) % list.length;
            setSubHeading(list[index.current]);
        }, 2500);

        return () => clearInterval(interval);
    }, [list]);


    const ctaButtons = [
        <a href="/plans"><button>Browse Plans</button></a>,
        <a href="/services"><button>Browse all Services</button></a>
    ]


    return (
        <>
            <Hero header="Professional and Affordable Websites for:" subHeading={subHeading} ctaButtons={ctaButtons} heroImage={heroImage} />

            <Section header="Our Most Popular Website Plans">
                <div className="grid grid-cols-4 gap-6">
                    {plans}
                </div>
            </Section>

            <Section header="Extra Website Services at an Affordable Price">
                <div className="grid grid-cols-3 gap-6">
                    {services}
                </div>
            </Section>
            <Section header="What is Webspective / About Us">
                <p className="text-lg">
                    At Webspective, we build modern, high-performing websites that help small businesses grow their online presence and stand out in a competitive market. From clean, professional designs to reliable hosting and ongoing maintenance, we focus on creating websites that not only look great but also perform seamlessly.
                    <br />
                    <br />
                    Our mission is simple: take the stress out of managing your website so you can focus on running your business. We combine technical expertise, design know-how, and a customer-first approach to deliver websites that attract customers, showcase your services, and drive results.
                    <br />
                    <br />

                    Whether you're starting fresh or upgrading an existing site, Webspective is here to provide a complete, worry-free solution — fast, reliable, and tailored to your business needs.
                </p>
            </Section>
        </>
    )
}

export default Home