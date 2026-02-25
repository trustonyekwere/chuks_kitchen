"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

const Items = [
{
    id: 1,
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    quantity: 1,
    image: "/1.png",
},
{
    id: 2,
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    quantity: 1,
    image: "/2.png",
},
{
    id: 3,
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    quantity: 1,
    image: "/3.png",
},
{
    id: 4,
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    quantity: 1,
    image: "/4.png",
},
];

export default function Cart() {

return (
    <div className="bg-gray-100 min-h-screen pt-30 pb-6 px-4">
        <div className="max-w-5xl mx-auto bg-white text-blue p-6 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-5">Your Cart</h2>

            <div className="space-y-4">
                {Items.map((item) => (
                    <div
                    key={item.id}
                    className="
                        border border-gray-300 rounded-md p-4
                        flex flex-col md:grid md:grid-cols-[1.1fr_4fr] lg:grid-cols-[0.8fr_4fr]" >

                        {/* Image */}
                        <div className="relative w-full h-44 md:w-32 md:h-32 rounded-md overflow-hidden shrink-0">
                            <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            />
                        </div>

                        {/* Content + controls */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            {/* Details */}
                            <div className="flex-1 space-y-1 pt-4 md:pt-0">
                                <h1 className="font-bold text-lg md:text-2xl">{item.name}</h1>
                                <p className="text-md md:text-lg text-gray-500 font-medium">
                                    {item.description}
                                </p>
                            </div>

                            {/* Controls (quantity + price + remove) */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-2 md:mt-0">
                                {/* Quantity */}
                                <div className="flex items-center gap-3 lg:gap-5 md:justify-normal justify-between w-full">
                                    <button
                                    className="bg-gray-200 p-2 rounded cursor-pointer"
                                    aria-label="increase"
                                    >
                                        <Plus size={18} />
                                    </button>

                                    <span className="text-lg font-bold">
                                        {item.quantity ?? 1}
                                    </span>

                                    <button
                                    className="bg-gray-200 p-2 rounded cursor-pointer"
                                    aria-label="decrease"
                                    >
                                        <Minus size={18} />
                                    </button>
                                </div>

                                <div className="flex items-center space-x-1.5 lg:space-x-3 justify-between w-full">
                                    {/* Price */}
                                    <div className="text-[#FF7A18] text-lg font-bold">
                                        ₦{Number(item.price).toLocaleString()}
                                    </div>

                                    {/* Remove */}
                                    <button
                                        className="bg-[#FF7A18] text-white p-1 rounded cursor-pointer"
                                        aria-label="remove item"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add More */}
            <div className="mt-6">
            <button className="text-sm text-blue-500 hover:underline cursor-pointer">
                + Add more items from Chuks Kitchen
            </button>
            </div>
        </div>
    </div>
);
}
