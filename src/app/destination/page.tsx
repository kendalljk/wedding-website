import venue from '../../../public/venue.jpeg'
import Image from 'next/image';

export default function Destination() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center pt-24">
            <h1 className="text-4xl pb-5">The Spot</h1>
            <a href="https://www.sandos.com/sandos-finisterra/los-cabos-all-inclusive-resort">
                <Image src={venue} alt="venue" width={800} />
            </a>
            <h2 className="lg:text-2xl md:text-xl tracking-widest pt-5">
                <a href="https://www.sandos.com/sandos-finisterra/los-cabos-all-inclusive-resort">
                    Sandos Finisterra
                </a>
            </h2>
            <h3>Los Cabos</h3>
        </section>
    );
}
