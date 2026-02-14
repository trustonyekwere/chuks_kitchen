import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../ui/Button";
import { MenuIcon } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="w-full">
                <nav className=" bg-white px-12 py-4 shadow-md">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <Link href="#hero" className="text-lg font-bold text-white">
                        <Image
                            src="/Chuks_Kitchen.png"
                            alt="Chuks Kitchen"
                            width={183}
                            height={41}
                            priority
                        />
                        </Link>

                        {/* Links */}
                        <ul className="hidden md:flex items-center md:gap-10 lg:gap-25 md:text-[14px] lg:text-[16px] font-medium text-blue">
                        <li>
                            <Link href="/" className="text-[#FF7A18] transition">
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link href="explore" className="hover:text-[#FF7A18] transition">
                            Explore
                            </Link>
                        </li>
                        <li>
                            <Link
                            href="#orders"
                            className="hover:text-[#FF7A18] transition"
                            >
                            My Orders
                            </Link>
                        </li>
                        <li>
                            <Link
                            href="#account"
                            className="hover:text-[#FF7A18] transition"
                            >
                            Account
                            </Link>
                        </li>
                        </ul>

                        {/* CTA */}
                        <div className="hidden md:flex">
                            <ButtonLink text="Login" href="/contact-us" />
                        </div>

                        {/* HAMBURGER */}
                        <div className="flex md:hidden">
                            <MenuIcon color="black" />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
