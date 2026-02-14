import { SearchIcon } from "lucide-react"
import ButtonLink from "../ui/Button"

export default function New_menu() {
    return (
        <section className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-12 h-full flex text-start items-center">
                <div className="max-w-230.5 ">
                    <div className="text-white">
                        <h1 className="text-5xl md:text-[48px] font-bold">
                            Introducing Our New Menu Additions!
                        </h1>
                        <p className="mt-4 text-[32px] font-semibold text-white">
                            Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
                        </p>
                        <div className="mt-4">
                            <ButtonLink text="Discover what’s new" href="/contact-us" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
