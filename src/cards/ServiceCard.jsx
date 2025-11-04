import Card from "./Card"

function ServiceCard({ heading = "Headline", children = "Sample", price = 1.23, services = [], image, ctaLink }) {
    return (
        <Card heading={heading} price={price} services={services} image={image} altLink="/services" monthly={true} ctaLink={ctaLink} ctaText="Purchase Service">{children}</Card>

    );
}

export default ServiceCard