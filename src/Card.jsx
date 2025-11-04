


function Card({ heading = "Headline", children = "Sample", price = 1.23, services = [], image, }) {

    services = services.map((v) => { return <li>{v}</li> })
    return (
        <div className="card">
            {image ? (<img src={image} className="aspect-video" />) : null}

            <div className="p-4 flex flex-col gap-3">
                <h3>{heading}</h3>
                <p>{children}</p>

                <h4>Includes:</h4>
                <ul>
                    {services}
                </ul>
            </div>

            <hr className="mt-auto" />
            <div className="p-4 h-auto flex flex-row gap-3 place-items-center place-content-end bg-zinc-900/50 flex-wrap">
                <div className="flex flex-row gap-3">
                    <h4 className="line-through text-red-400">${price * 2}</h4>
                    <h4>${price} (50% off)</h4>
                </div>
                <div className="flex flex-row gap-3 place-items-center">
                    <a href="/plans"><button className="alt-button">View More</button></a>
                    <a><button>Select Plan</button></a>
                </div>
            </div>
        </div>
    );
}

export default Card