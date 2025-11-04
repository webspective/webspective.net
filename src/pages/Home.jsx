import { useState, useEffect, useRef, useMemo } from "react"
import Hero from "../Hero"
import Section from "../Section"
import heroImage from "../imgs/heros/home.webp";
import Card from "../Card";

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
                    <Card heading="Startup Landing Page" price={99.99} services={["Single-page scroll design", "Custom sections for features, pricing, and CTA", "Fast Load and basic SEO", "Responsive on Mobile Devices"]}>
                        A modern, high-performing website built to showcase your services, attract customers, and grow your local presence. Perfect for small businesses ready to look professional and compete online.
                    </Card>
                    <Card heading="Personal Portfolio" price={249.99} services={["1-3 pages (Home, Projects, Contact)", "Smooth animations and transitions", "Modern typography and color palette", "Optional resume section", "Built for performance and SEO"]}>
                        A sleek, personalized portfolio built to highlight your craft, skills, and individuality. Perfect for freelancers, students, or professionals who want to stand out with a clean, modern design that leaves a lasting impression.
                    </Card>
                    <Card
                        heading="Blog Site"
                        price={349.99}
                        services={[
                            "Custom blog layout with featured post section",
                            "Individual post pages with SEO-optimized URLs",
                            "Search & category filtering",
                            "Newsletter or subscription form",
                            "Optional CMS integration (Markdown)"
                        ]}
                    >
                        A content-focused site built for writers, creators, and educators. Share your voice through a beautifully designed, performance-tuned blog that grows with your audience.
                    </Card>

                    <Card heading="Small Business Site" price={499.99} services={["4-6 page custom site (Home, Services, About, Contact, etc.)", "SEO optimization and Google indexing", "Contact form, booking, or quote system", "Analytics + basic branding integration", "Responsive on Mobile Devices"]}>
                        A modern, high-performing website built to showcase your services, attract customers, and grow your local presence. Perfect for small businesses ready to look professional and compete online.
                    </Card>
                </div>
            </Section>
        </>
    )
}

export default Home