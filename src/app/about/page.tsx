import miranda from '../../../public/miranda.jpg'
import brent from '../../../public/brent.jpg'
import Image from 'next/image';

export default function About() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center pt-24">
            <h1 className="text-4xl pb-5">The Couple</h1>
            <div className="w-full flex justify-around pb-2">
                <h2 className="text-xl uppercase font-bold tracking-widest">
                    The Bride
                </h2>
                <h2 className="text-xl uppercase font-bold tracking-widest">
                    The Groom
                </h2>
            </div>
            <div className="flex w-full justify-around">
                <div
                    className="flex justify-start"
                    style={{
                        height: "30rem",
                    }}
                >
                    <Image
                        src={miranda}
                        alt="Miranda"
                        className="rounded h-full w-80"
                    />
                </div>
                <div
                    className="flex flex-col items-end"
                    style={{
                        height: "30rem",
                    }}
                >
                    <Image
                        src={brent}
                        alt="Brent"
                        className="rounded h-full w-80"
                    />
                </div>
            </div>
            <div className="w-full flex justify-around pt-5">
                <div className="w-1/4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam ipsum, molestiae animi beatae ab mollitia.
                    Voluptatem beatae fugit placeat dolorem fugiat quae, illo
                    expedita, inventore maxime quod repudiandae voluptate modi.
                </div>
                <div className="w-1/4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas dolor natus, delectus modi similique mollitia autem,
                    ipsa beatae nulla, alias sapiente minus cum nobis sint? Vero
                    nemo tempore aspernatur dolorum?
                </div>
            </div>
        </section>
    );
}
