import {FacebookIcon, InstagramIcon, TwitterIcon} from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import ButtonLink from "../ui/Button"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <section className="bg-[#62412E]">
                <div className="mx-auto max-w-6xl px-6 pt-18 pb-5">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6">
                        <div>
                            {/* Logo */}
                            <Link href="#hero" className="text-xl font-bold text-white">
                                <Image
                                    src="/Chuks_Kitchen.png"
                                    alt="Chuks Kitchen"
                                    width={183}
                                    height={41} 
                                    priority
                                />
                            </Link>
                            <p className="mt-2 text-xl text-gray-300">Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-xl">Quick Links</h1>
                            <ul className="text-gray-400 space-y-1 mt-2">
                                <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                                <li><a href="#features" className="hover:text-gray-300">Features</a></li>
                                <li><a href="#property" className="hover:text-gray-300">Property</a></li>
                                <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-semibold text-xl">Contact Us</h1>
                            <ul className="text-gray-400 space-y-1 mt-2">
                                <li><a href="https://wa.me/+2348108212511" className="hover:text-gray-300">+234 810 821 2511</a></li>
                                <li><a href="mailto:trustonyekwere151@gmail.com" className="hover:text-gray-300">trustonyekwere151@gmail.com</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-400 space-y-1 mt-2">
                                <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                                <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                                <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-center items-center pt-6 text-white">
                        <p>&copy; {currentYear} Real Estate. All Rights Reserved.</p>
                    </div>
                </div>
            </section>
        </>
    )
}