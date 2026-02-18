import {FacebookIcon, InstagramIcon, TwitterIcon} from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import ButtonLink from "../ui/Button"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <section className="bg-[#62412E]">
                <div className="mx-auto max-w-7xl px-6 pt-18 pb-5">
                    <div className="grid sm:grid-cols-1 md:grid-cols-[2fr_1.2fr_1.2fr_1fr] lg:grid-cols-[2fr_1.2fr_1.2fr_1fr] gap-8">
                        <div>
                            {/* Logo */}
                            <Link href="#hero" className="text-xl font-bold text-white">
                                <Image
                                    src="/Chuks_Kitchen.png"
                                    alt="Chuks Kitchen"
                                    width={183}
                                    height={41} 
                                    priority
                                    draggable="false"
                                />
                            </Link>
                            <p className="mt-2 text-xl leading-relaxed text-white">Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                        </div>
                        <div>
                            <h1 className="font-medium text-xl">Quick Links</h1>
                            <ul className="text-gray-300 space-y-4 mt-2 text-sm">
                                <li><a href="#home" className="hover:text-white">Home</a></li>
                                <li><a href="#explore" className="hover:text-white">Explore</a></li>
                                <li><a href="#orders" className="hover:text-white">My Orders</a></li>
                                <li><a href="#account" className="hover:text-white">Account</a></li>
                                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-medium text-xl">Contact Us</h1>
                            <ul className="text-gray-300 space-y-4 mt-2 text-sm">
                                <li><a href="#" className="hover:text-white">+234 801 234 5678</a></li>
                                <li><a href="#" className="hover:text-white">hello@chukskitchen.com</a></li>
                                <li><a href="#" className="hover:text-white">123 Taste Blvd, Lagos, Nigeria</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-300 space-y-4 text-sm">
                                <li><a href="#" className="hover:text-white">Facebook</a></li>
                                <li><a href="#" className="hover:text-white">Twitter</a></li>
                                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-start items-center text-sm font-light py-6 text-white">
                        <p>&copy; {currentYear} Lift Media. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </>
    )
}