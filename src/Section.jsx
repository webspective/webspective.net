function Section({ header = "Headline", children }) {
    return (
        <section>
            <div className="flex flex-col gap-6">
                <h2 className="mb-6 border-b-2 border-b-zinc-700 pb-2">{header}</h2>
                {children}
            </div>
        </section>
    );
}

export default Section