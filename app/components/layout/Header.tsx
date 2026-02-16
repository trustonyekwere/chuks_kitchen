"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import ButtonLink from "../ui/Button";
import { MenuIcon } from "lucide-react";

export default function Header() {
    const pathname = usePathname()

    const linkClass = (path: string) =>
    `transition ${
        pathname === path
        ? "text-[#FF7A18] font-semibold"
        : "text-[#1F2937] hover:text-[#FF7A18]"
    }`

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="w-full">
                <nav className=" bg-white px-6 py-4 shadow-md">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/">
                            <Image
                                src="/Chuks_Kitchen.png"
                                alt="Chuks Kitchen"
                                width={183}
                                height={41}
                                priority
                            />
                        </Link>

                        {/* Links */}
                        <ul className="hidden md:flex items-center md:gap-10 lg:gap-25 md:text-[14px] lg:text-[16px] font-medium">
                        <li>
                            <Link href="/" className={linkClass("/")}>
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/explore" className={linkClass("/explore")}>
                            Explore
                            </Link>
                        </li>
                        <li>
                            <Link href="/orders" className={linkClass("/orders")} >
                            My Orders
                            </Link>
                        </li>
                        <li>
                            <Link href="/account" className={linkClass("/account")} >
                            Account
                            </Link>
                        </li>
                        </ul>

                        {/* CTA */}
                        <div className="hidden md:flex">
                            <ButtonLink text="Login" href="#login" />
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
