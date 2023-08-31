export default function FAQ() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center">
            <h1 className="pt-20 text-4xl">The Details</h1>
            <div className="w-1/2 lg:w-1/3">
                <details className="pt-5">
                    <summary className="font-bold uppercase">
                        When and where is the wedding?
                    </summary>
                    The wedding will be held on [Date] at [Venue Address]. The
                    ceremony will begin promptly at [Time], followed by a
                    reception at the same venue.
                </details>
                <details className="pt-5">
                    <summary className="font-bold uppercase">
                        What is the dress code?
                    </summary>
                    We're going for a [Dress Code, e.g., "semi-formal"] look.
                    Feel free to dress in comfortable, celebratory attire
                    suitable for the occasion.
                </details>
                <details className="pt-5">
                    <summary className="font-bold uppercase">
                        Are there any accommodations nearby?
                    </summary>
                    Yes, we have reserved a block of rooms at [Hotel Name].
                    Please mention the [Bride & Groom's Names] wedding when
                    booking to avail of a special rate.
                </details>
                <details className="pt-5">
                    <summary className="font-bold uppercase">
                        When and where is the wedding?
                    </summary>
                    The wedding will be held on [Date] at [Venue Address]. The
                    ceremony will begin promptly at [Time], followed by a
                    reception at the same venue.
                </details>
                <details className="pt-5">
                    <summary className="font-bold uppercase">
                        What is the dress code?
                    </summary>
                    We're going for a [Dress Code, e.g., "semi-formal"] look.
                    Feel free to dress in comfortable, celebratory attire
                    suitable for the occasion.
                </details>
                <details className="pt-5">
                    <summary className="font-bold uppercase">
                        Are there any accommodations nearby?
                    </summary>
                    Yes, we have reserved a block of rooms at [Hotel Name].
                    Please mention the [Bride & Groom's Names] wedding when
                    booking to avail of a special rate.
                </details>
            </div>
        </section>
    );
}
