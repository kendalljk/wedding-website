"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../app/resources/Logo.png";

function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="fixed w-full flex top-0 z-10 bg-white text-xs sm:text-sm md:text-base xl:text-md">
            <div className="flex w-full my-3 justify-center">
                <div className="pb-2">
                    <Link
                        href="/"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/"
                                ? "underline underline-offset-8"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/about"
                                ? "underline underline-offset-8"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/destination"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/destination"
                                ? "underline underline-offset-8"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        Destination
                    </Link>
                    <Link
                        href="/FAQ"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/FAQ"
                                ? "underline underline-offset-8"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/RSVP"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/RSVP"
                                ? "underline underline-offset-8"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        RSVP
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
