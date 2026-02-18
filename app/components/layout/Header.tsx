"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import ButtonLink from "../ui/Button";
import { MenuIcon, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname()

    const linkClass = (path: string) =>
    `transition ${
        pathname === path
        ? "text-[#FF7A18] font-semibold"
        : "text-[#1F2937] hover:text-[#FF7A18]"
    }`

    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="w-full">
                <nav className=" bg-white py-4 shadow-md">
                    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/">
                            <Image
                                src="/Chuks_Kitchen.png"
                                alt="Chuks Kitchen"
                                width={183}
                                height={41}
                                priority
                                draggable="false"
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
                            <ButtonLink text="Login" href="/login" />
                        </div>

                        {/* HAMBURGER */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex md:hidden"
                            aria-label="Toggle menu"
                        >
                            {open ? <X size={28} color="black" /> : <MenuIcon size={28} color="black" />}
                        </button>
                    </div>
                </nav>
                {/* MOBILE MENU */}
                <div
                    className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden
                    ${open ? "max-h-100 py-4" : "max-h-0"}`}
                >
                    <ul className="flex flex-col gap-6 px-6 text-[15px] font-medium">
                        <li>
                            <Link href="/" onClick={() => setOpen(false)} className={linkClass("/")}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/explore" onClick={() => setOpen(false)} className={linkClass("/explore")}>
                                Explore
                            </Link>
                        </li>

                        <li>
                            <Link href="/orders" onClick={() => setOpen(false)} className={linkClass("/orders")}>
                                My Orders
                            </Link>
                        </li>

                        <li>
                            <Link href="/account" onClick={() => setOpen(false)} className={linkClass("/account")}>
                                Account
                            </Link>
                        </li>

                        <li className="pt-2">
                            <ButtonLink text="Login" href="#login" />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
