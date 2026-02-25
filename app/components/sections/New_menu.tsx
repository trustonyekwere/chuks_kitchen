"use client"

import { motion } from "framer-motion"
import ButtonLink from "../ui/Button"

export default function New_menu() {
    return (
        <section className="relative h-152.5 bg-[url('/beans.png')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 h-full flex text-start items-center">
                <motion.div      
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-white">
                        <h1 className="text-3xl md:text-[48px] font-extrabold">
                            Introducing Our New Menu Additions!
                        </h1>
                        <p className="mt-4 sm:text-xl lg:text-2xl max-w-2xl font-semibold text-white">
                            Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
                        </p>
                        <div className="mt-4">
                            <ButtonLink text="Discover what’s new" href="/contact-us" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
