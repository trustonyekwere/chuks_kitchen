import Image from "next/image"
import Link from "next/link"
import ButtonLink from "../ui/Button"
import { MenuIcon } from "lucide-react"

export default function Header(){
    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="w-screen">
                <nav className="flex items-center justify-between bg-white px-12 py-4">
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
                        <ul className="hidden md:flex items-center gap-20 text-[16px] font-medium text-[#1F2937]">
                            <li>
                                <Link href="#hero" className="hover:text-[#FF7A18] transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-[#FF7A18] transition">
                                    Explore
                                </Link>
                            </li>
                            <li>
                                <Link href="#features" className="hover:text-[#FF7A18] transition">
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link href="#property" className="hover:text-[#FF7A18] transition">
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
                        <MenuIcon color="gray" />
                    </div>
                </nav>
            </div>
        </header>
    )
}
