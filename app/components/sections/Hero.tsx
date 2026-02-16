"use client"

import { motion } from "framer-motion"
import { SearchIcon } from "lucide-react"
import ButtonLink from "../ui/Button"

type HeroProps = {
    title: string
    subtitle: string
    bgImage: string
    buttonText?: string
    buttonHref?: string
    placeholder?: string
    height: string
}

export default function Hero({ title, subtitle, buttonText, buttonHref, bgImage, placeholder, height }: HeroProps) {
    return (
        <section className={`relative ${height} bg-cover bg-center`} style={{ backgroundImage: `url(${bgImage})` }} id="hero">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl px-6 mx-auto h-full flex text-start items-center">
                <div className="max-w-200">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-white">
                            <h1 className="text-4xl md:text-[48px] font-bold">
                                {/* The Heart of Nigerian Home Cooking */}
                                {title}
                            </h1>
                            <p className="mt-4 sm:text-xl lg:text-2xl font-semibold text-white">
                                {/* Handcrafted with passion, delivered with care. */}
                                {subtitle}
                            </p>
                            {buttonText && buttonHref && (
                                <div className="mt-4">
                                    <ButtonLink text={buttonText} href={buttonHref} />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* search form */}
            {placeholder && (
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="rounded-md min-w-md md:min-w-2xl bg-white px-3 py-1 shadow-lg">
                        <form action="" className="flex justify-center items-center gap-4">
                            <button name="submit" className="cursor-pointer">
                                <SearchIcon size={35} color="gray" />
                            </button>
                            <input name="cravings" className="text-black font-semibold w-full py-4 pe-10 focus:outline-none placeholder:text-gray-600" placeholder={placeholder} />
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
}
