import Image from "next/image";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Details from "./components/Details";

export default function Home() {
    return (
        <main className="min-h-screen w-full flex flex-col items-center">
            <Banner />
        <Hero />
        <Details/>
        </main>
    );
}
