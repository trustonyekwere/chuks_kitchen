import { SearchIcon } from "lucide-react"
import ButtonLink from "../ui/Button"

export default function Hero() {
    return (
        <section className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-230.5 px-12 h-full flex text-start items-center">
                <div className="text-white">
                    <h1 className="text-5xl md:text-[48px] font-bold">
                        The Heart of Nigerian Home Cooking
                    </h1>
                    <p className="mt-4 text-[32px] font-semibold text-white">
                        Handcrafted with passion, delivered with care.
                    </p>
                    <div className="mt-4">
                        <ButtonLink text="Discover what’s new" href="/contact-us" />
                    </div>
                </div>
            </div>

            {/* Cravings */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-sm min-w-lg bg-white px-3 py-4 flex shadow-lg gap-4">
                    <SearchIcon color="gray" />
                    <p className="text-black font-semibold">What are you craving for today?</p>
                </div>
            </div>
        </section>
    )
}
