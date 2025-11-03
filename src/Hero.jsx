

function Hero({ header = "Headline", subHeading = "Sample", ctaButtons = [], heroImage, }) {
    return (
        <div className="hero">
            <img src={heroImage} />
            <h1>{header}</h1>
            <h2>{subHeading}</h2>
            <div className="flex flex-row gap-6 mt-3">
                {ctaButtons}
            </div>
        </div>
    );
}

export default Hero