"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ButtonLink from "../ui/Button";

const Category = [
    {
        id: "1",
        img: "/1.png",
        title: "Jollof Delights",
    },
    {
        id: "2",
        img: "/2.png",
        title: "Swallow & Soups",
    },
    {
        id: "3",
        img: "/3.png",
        title: "Grills & BBQ",
    },
    {
        id: "4",
        img: "/4.png",
        title: "Sweet Treats",
    },
    {
        id: "5",
        img: "/2.png",
        title: "Jollof Delights",
    },
    {
        id: "6",
        img: "/3.png",
        title: "Jollof Delights",
    },
]

const Categories = () => {
    return (
        <div className="bg-[#F3F4F6] flex justify-center items-center py-10" id="categories">
            <div className="max-w-7xl justify-center text-center items-center m-0 py-10">
                <motion.div      
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-5"
                >
                    <h1 className="text-blue font-bold text-[32px] py-3">Popular Categories</h1>
                </motion.div>

                <div className="max-w-7xl justify-center items-center flex">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 max-w-7xl mx-auto px-6">

                        {/* categories cards */}
                        {Category.map((categories) => (
                            <motion.div      
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                key={categories.id}
                            >
                                <div className="bg-white h-full w-full flex flex-col md:block cursor-pointer rounded-lg hover:-translate-y-1 transition-all duration-400">
                                    <div className="flex justify-center items-center">
                                        <Image
                                            src={categories.img} 
                                            alt="categories"
                                            width={400}    
                                            height={400}    
                                            priority
                                            className="w-100 rounded-t-lg"
                                        />
                                    </div>
                                    <h1 className="text-xl py-10 font-semibold text-blue">
                                        {categories.title}
                                    </h1>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
                <motion.div      
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="mt-4">
                        <ButtonLink text="View All Categories" href="/contact-us" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Categories
