import PlanCard from "./cards/PlanCard"
import ServiceCard from "./cards/ServiceCard"

export const plans = [
    <PlanCard
        heading="Startup Landing Page"
        price={99.99}
        services={[
            "Single-page scroll design",
            "Custom sections for features, pricing, and CTA",
            "Fast Load and basic SEO",
            "Responsive on Mobile Devices"
        ]}
    >
        A modern, high-performing website built to showcase your services, attract customers, and grow your local presence. Perfect for small businesses ready to look professional and compete online.
    </PlanCard>,
    <PlanCard
        heading="Personal Portfolio"
        price={249.99}
        services={[
            "1-3 pages (Home, Projects, Contact)",
            "Smooth animations and transitions",
            "Modern typography and color palette",
            "Optional resume section",
            "Built for performance and SEO"
        ]}
    >
        A sleek, personalized portfolio built to highlight your craft, skills, and individuality. Perfect for freelancers, students, or professionals who want to stand out with a clean, modern design that leaves a lasting impression.
    </PlanCard>,
    <PlanCard
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
    </PlanCard>,

    <PlanCard
        heading="Small Business Site"
        price={499.99}
        services={[
            "4-6 page custom site (Home, Services, About, Contact, etc.)",
            "SEO optimization and Google indexing",
            "Contact form, booking, or quote system",
            "Analytics + basic branding integration",
            "Responsive on Mobile Devices"
        ]}
    >
        A modern, high-performing website built to showcase your services, attract customers, and grow your local presence. Perfect for small businesses ready to look professional and compete online.
    </PlanCard>
]

export const services = [
    <ServiceCard
        heading="Website Hosting"
        price={14.99}
        services={[
            "High-speed, reliable servers",
            "Free SSL certificate & security monitoring",
            "Automatic updates and uptime management",
            "Fully managed setup, no technical work required"
        ]}
    >
        Reliable, high-performance hosting managed by Webspective. Your site stays online, secure, and optimized with expert server management and active monitoring no setup, no stress, just a fast and seamless experience for your visitors.
    </ServiceCard>,
    <ServiceCard
        heading="Website Maintenance"
        price={49.99}
        services={[
            "SEO upkeep",
            "Performance Optimizations (image compression, cache cleanup)",
            "Minor content edits (e.g., text or image swaps, small layout fixes)",
            "Priority email support for technical issues"
        ]}
    >
        Keep your website fast, secure, and worry-free with ongoing maintenance from Webspective. We handle updates, performance optimization, and security monitoring so your site stays reliable, professional, and ready to impress while you focus on running your business.
    </ServiceCard>,
    <ServiceCard
        heading="Website Hosting + Maintenance"
        price={54.99} // bigger discount to make it feel like a deal
        services={[
            "Fully managed hosting & security monitoring",
            "Performance optimizations (image compression, cache cleanup)",
            "SEO upkeep & reliability checks",
            "Minor content edits (e.g., text or image swaps, small layout fixes)",
            "Priority email support for technical issues"
        ]}
    >
        Take the stress out of managing your website with Webspective's all-in-one plan. We combine fast, reliable hosting with ongoing maintenance, security, and performance management, so your site stays professional, optimized, and ready to impress all for a single, discounted monthly price.
    </ServiceCard>


]