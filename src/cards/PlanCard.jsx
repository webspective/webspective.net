import Card from "./Card"


function PlanCard({ heading = "Headline", children = "Sample", price = 1.23, services = [], image, ctaLink }) {
    return (
        <Card heading={heading} price={price} services={services} image={image} altLink="/plans" ctaLink={ctaLink} ctaText="Select Plan">{children}</Card>

    );
}

export default PlanCard