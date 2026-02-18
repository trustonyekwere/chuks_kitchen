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
    <div className="bg-gray-100 min-h-screen pt-40 pb-25 px-4">
        <div className="max-w-5xl mx-auto bg-white text-blue p-6 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-5">Your Cart</h2>

            <div className="space-y-4">
                {Items.map((item) => (
                    <div
                    key={item.id}
                    className="flex items-center gap-4 border border-gray-300 rounded-md p-4"
                    >
                        {/* Image */}
                        <div className="relative w-35 h-35 rounded-md overflow-hidden shrink-0">
                            <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            />
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1 space-y-3">
                            <h1 className="font-bold text-2xl">{item.name}</h1>
                            <p className="text-md text-gray-500 font-semibold">{item.description}</p>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center gap-3 space-x-3">
                            <button
                                className="bg-gray-200 p-1 rounded cursor-pointer"
                            >
                                <Plus size={16} />
                            </button>

                            <span className="text-2xl font-medium">{item.quantity}</span>

                            <button
                                className="bg-gray-200 p-1 rounded cursor-pointer"
                            >
                                <Minus size={16} />
                            </button>
                        </div>

                        {/* Price */}
                        <div className="text-[#FF7A18] text-xl font-bold w-20 text-right">
                            ₦{(item.price)}
                        </div>

                        {/* Remove */}
                        <button
                            className="bg-[#FF7A18] text-white p-1 rounded cursor-pointer"
                        >
                            <X size={14} />
                        </button>
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
