"use client"

// Sections
import Cart from "../components/sections/Cart"

// layout
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

// components
import BackToTop from "../components/ui/BackToTop";

export default function Orders() {
    return (
        <>
            <Header />
            <Cart />
            <BackToTop />
            <Footer />
        </>
    )
}
