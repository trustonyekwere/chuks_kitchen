// Sections
import Hero from "./components/sections/Hero"
import Categories from "./components/sections/Categories"
import Specials from "./components/sections/Specials"
import New_menu from "./components/sections/New_menu"

// layout
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

// components
import BackToTop from "./components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <Hero 
          title="The Heart of Nigerian Home Cooking"
          subtitle="Handcrafted with passion, delivered with care."
          bgImage="/hero.jpg" 
          height="h-screen"
          buttonText="Discover what’s new"
          buttonHref="/"
          placeholder="What are you craving for today?"
      />
      <Categories />
      <Specials />
      <New_menu />
      <BackToTop />
      <Footer />
    </>
  )
}
