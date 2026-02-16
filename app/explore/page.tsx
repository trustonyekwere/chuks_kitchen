"use client"

// Sections
import Hero from "../components/sections/Hero"
import Menu from "../components/sections/Menu"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Explore() {
    const [open, setOpen] = useState(true)

    return (
        <>
            <Hero
                title="Chuks  Kitchen"
                subtitle="Chuks Kitchen Nigerian Home Cooking 4.8  (1.2k)"
                bgImage="/4.8.jpg"
                height="h-[586px]"
            />
            {/* dropdown */}
            <div className="flex justify-center items-center md:py-20 pb-15 bg-gray-100">
                <div className="w-full mx-auto max-w-7xl bg-white md:rounded-lg">
                    {/* Button */}
                    <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-xl font-semibold text-black  px-4 py-5 rounded-md">
                        Menu Categories
                        <ChevronDown size={18} />
                    </button>

                    {/* Dropdown */}
                    {open && (
                        <div className="mt-2 bg-white rounded-lg text-black">
                            <a href="#popular" className="cursor-pointer">
                                <div className="px-4 py-2 bg-orange-100 border-l-4 border-[#FF7A18]">
                                    Popular
                                </div>
                            </a>
                            <a href="#jollof" className="cursor-pointer">
                                <div className="px-4 py-2 hover:bg-orange-100">
                                    Jollof Rice & Entrees
                                </div>
                            </a>
                            <a href="#swallow" className="cursor-pointer">
                                <div className="px-4 py-2 hover:bg-orange-100">
                                    Swallow & Soups
                                </div>
                            </a>
                            <a href="#" className="cursor-pointer">
                                <div className="px-4 py-2 hover:bg-orange-100">
                                    Grills & sides
                                </div>
                            </a>
                            <a href="#" className="cursor-pointer">
                                <div className="px-4 py-2 hover:bg-orange-100">
                                    Beverages
                                </div>
                            </a>
                            <a href="#" className="cursor-pointer">
                                <div className="px-4 py-2 hover:bg-orange-100">
                                    Desserts
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <Menu />
        </>
    )
}
