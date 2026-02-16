"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PlusIcon } from "lucide-react";

const popular = [
    {
        id: "1",
        img: "/1.png",
        title: "Jollof Rice & Fried Chicken",
        description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
        price: "₦3,500",
    },
    {
        id: "2",
        img: "/eba.jpg",
        title: "Eba & Egusi Soup (Goat Meat)",
        description: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
        price: "₦3,500",
    },
    {
        id: "3",
        img: "/p_yam.jpg",
        title: "Pounded Yam & Edikaikong",
        description: "Traditional pounded yam with rich, leafy Edikaikong soup.",
        price: "₦3,800",
    },
    {
        id: "4",
        img: "/snail.jpg",
        title: "Peppered Snail",
        description: "Spicy and savory peppered snail, perfect as a starter.",
        price: "₦2,500",
    },
    {
        id: "5",
        img: "/tilapia.jpg",
        title: "Grilled Tilapia Fish",
        description: "Whole grilled tilapia seasoned with our special spices.",
        price: "₦4,500",
    },
    {
        id: "6",
        img: "/1.png",
        title: "Jollof Rice & Fried Chicken",
        description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
        price: "₦3,500",
    },
]
const jollof = [
    {
        id: "7",
        img: "/smoked.jpg",
        title: "Jollof Rice & Smoked Fish",
        description: "Flavorful jollof rice served with perfectly smoked fish.",
        price: "₦3,500",
    },
    {
        id: "8",
        img: "/1.png",
        title: "Party Jollof Rice (Veg)",
        description: "Vegetarian party jollof, full of rich flavors.",
        price: "₦2,800",
    },
    {
        id: "9",
        img: "/1.png",
        title: "Party Jollof Rice (Veg)",
        description: "Vegetarian party jollof, full of rich flavors.",
        price: "₦3,500",
    },
]
const swallow = [
    {
        id: "10",
        img: "/amala.jpg",
        title: "Amala with Gbegiri & Ewedu",
        description: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
        price: "₦3,100",
    },
    {
        id: "11",
        img: "/okra.jpg",
        title: "Fufu & Okra Soup (Fish)",
        description: "Light Fufu served with fresh okra soup and tilapia fish.",
        price: "₦3,300",
    },
    {
        id: "12",
        img: "/okra.jpg",
        title: "Fufu & Okra Soup (Fish)",
        description: "Light Fufu served with fresh okra soup and tilapia fish.",
        price: "₦3,500",
    },
]

export default function Menu() {
    return (
        <>
            <section className="bg-[#F3F4F6] flex justify-center items-center" id="popular">
                <div className="max-w-7xl mx-auto px-6 justify-center text-center items-center m-0">
                    <motion.div      
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-blue font-bold text-xl md:text-[32px] md:py-3 text-start">Popular</h1>
                    </motion.div>

                    <div className="max-w-7xl justify-center items-center flex">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">

                            {/* popular cards */}
                            {popular.map((popular) => (
                                <motion.div      
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    key={popular.id}
                                >
                                    <div className="bg-white h-full w-full rounded-2xl flex md:block" >
                                        <div className="flex justify-center items-center">
                                            <Image
                                                src={popular.img} 
                                                alt="Popular Samples"
                                                width={350}    
                                                height={250}    
                                                priority
                                                className="rounded-2xl md:rounded-t-2xl"
                                            />
                                        </div>
                                        <div>
                                            <div className="px-4 flex-column max-w-sm text-start text-blue">
                                                <h1 className="text-sm md:text-xl pt-5 font-semibold">
                                                    {popular.title}
                                                </h1>
                                                <p className="pt-3 font-medium text-xs md:text-sm text-gray-400">
                                                    {popular.description}
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center px-4 py-4 md:py-8">
                                                <div>
                                                    <p className="text-orange text-sm md:text-lg">{popular.price}</p>
                                                </div>
                                                <div>
                                                    <button className="bg-[#FF7A18] hover:-translate-y-0.5 transition-all duration-300 rounded-full cursor-pointer md:p-1 flex items-center justify-center">
                                                        <PlusIcon color="white" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-[#F3F4F6] flex justify-center items-center py-10" id="jollof">
                <div className="max-w-7xl mx-auto px-6 justify-center text-center items-center m-0">
                    <motion.div      
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-blue font-bold text-xl md:text-[32px] py-3 text-start">Jollof Rice & Entrees</h1>
                    </motion.div>

                    <div className="max-w-7xl justify-center items-center flex">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">

                            {/* jollof cards */}
                            {jollof.map((jollof) => (
                                <motion.div      
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    key={jollof.id}
                                >
                                    <div className="bg-white h-full w-full rounded-2xl flex md:block" >
                                        <div className="flex justify-center items-center">
                                            <Image
                                                src={jollof.img} 
                                                alt="Jollof Rice & Entrees"
                                                width={350}    
                                                height={250}    
                                                priority
                                                className="rounded-2xl md:rounded-t-2xl"
                                            />
                                        </div>
                                        <div>
                                            <div className="px-4 flex-column max-w-sm text-start text-blue">
                                                <h1 className="text-sm md:text-xl pt-5 font-semibold">
                                                    {jollof.title}
                                                </h1>
                                                <p className="pt-3 font-medium text-xs md:text-sm text-gray-400">
                                                    {jollof.description}
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center px-4 py-4 md:py-8">
                                                <div>
                                                    <p className="text-orange text-sm md:text-lg">{jollof.price}</p>
                                                </div>
                                                <div>
                                                    <button className="bg-[#FF7A18] hover:-translate-y-0.5 transition-all duration-300 rounded-full cursor-pointer md:p-1 flex items-center justify-center">
                                                        <PlusIcon color="white" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F3F4F6] flex justify-center items-center pb-30" id="swallow">
                <div className="max-w-7xl mx-auto px-6 justify-center text-center items-center m-0">
                    <motion.div      
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-blue font-bold text-xl md:text-[32px] py-3 text-start">Swallow & Soups</h1>
                    </motion.div>

                    <div className="max-w-7xl justify-center items-center flex">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">

                            {/* swallow cards */}
                            {swallow.map((swallow) => (
                                <motion.div      
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    key={swallow.id}
                                >
                                    <div className="bg-white h-full w-full rounded-2xl flex md:block" >
                                        <div className="flex justify-center items-center">
                                            <Image
                                                src={swallow.img} 
                                                alt="Swallow & Soups"
                                                width={350}    
                                                height={250}    
                                                priority
                                                className="rounded-2xl md:rounded-t-2xl"
                                            />
                                        </div>
                                        <div>
                                            <div className="px-4 flex-column max-w-sm text-start text-blue">
                                                <h1 className="text-sm md:text-xl pt-5 font-semibold">
                                                    {swallow.title}
                                                </h1>
                                                <p className="pt-3 font-medium text-xs md:text-sm text-gray-400">
                                                    {swallow.description}
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center px-4 py-4 md:py-8">
                                                <div>
                                                    <p className="text-orange text-sm md:text-lg">{swallow.price}</p>
                                                </div>
                                                <div>
                                                    <button className="bg-[#FF7A18] hover:-translate-y-0.5 transition-all duration-300 rounded-full cursor-pointer md:p-1 flex items-center justify-center">
                                                        <PlusIcon color="white" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}