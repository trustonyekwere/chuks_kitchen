// Layout
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

// Sections
import Hero from "./components/sections/Hero"
import Categories from "./components/sections/Categories"
import Specials from "./components/sections/Specials"
import New_menu from "./components/sections/New_menu"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Specials />
      <New_menu />
      <Footer />
    </>
  )
}
