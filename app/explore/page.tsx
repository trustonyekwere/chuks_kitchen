"use client"

// Sections
import Hero from "../components/sections/Hero"
import Menu from "../components/sections/Menu"

// layout
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

// components
import BackToTop from "../components/ui/BackToTop";
import Dropdown from "../components/sections/Dropdown"

export default function Explore() {
    return (
        <>
            <Header />
            <Hero
                title="Chuks  Kitchen"
                subtitle="Chuks Kitchen Nigerian Home Cooking 4.8  (1.2k)"
                bgImage="/4.8.jpg"
                height="h-[586px]"
            />
            <Dropdown />
            <Menu />
            <BackToTop />
            <Footer />
        </>
    )
}
