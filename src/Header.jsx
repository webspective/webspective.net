import { useEffect, useState } from "react";

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1); // triggers when user scrolls down
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={scrolled ? "bg-zinc-950" : "bg-transparent"}>
            <a id="logo" href="/">WEBSPECTIVE</a>
            <div className="ml-auto gap-8 place-self-center flex flex-row text-xl">
                <a href="/">Home</a>
                <a href="/plans">Plans</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact Us</a>
            </div>
        </header>
    )
}

export default Header