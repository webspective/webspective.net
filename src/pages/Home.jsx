import { useState, useEffect, useRef, useMemo } from "react"
import Hero from "../Hero"
import Section from "../Section"
import heroImage from "../imgs/heros/home.webp";

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
            <Hero header="Professinal Websites for:" subHeading={subHeading} ctaButtons={ctaButtons} heroImage={heroImage} />
            <Section header="Our Most Popular Website Plans">
                <div className="flex flex-row gap-6">
                    <div className="card">
                        <img />
                        <h3></h3>
                        <p></p>
                        <ul>
                            <li>Basic SEO</li>
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Home