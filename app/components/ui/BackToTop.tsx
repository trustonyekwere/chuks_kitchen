"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!show) return null;

    return (
        <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 cursor-pointer bg-[#0081FE] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
            <ArrowUpIcon />
        </button>
    );
}
