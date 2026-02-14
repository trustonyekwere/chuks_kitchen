import { SearchIcon } from "lucide-react"
import ButtonLink from "../ui/Button"

export default function Hero() {
    return (
        <section className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-12 h-full flex text-start items-center">
                <div className="max-w-200">
                    <div className="text-white">
                        <h1 className="text-5xl md:text-[48px] font-bold">
                            The Heart of Nigerian Home Cooking
                        </h1>
                        <p className="mt-4 sm:text-xl lg:text-2xl font-semibold text-white">
                            Handcrafted with passion, delivered with care.
                        </p>
                        <div className="mt-4">
                            <ButtonLink text="Discover what’s new" href="/contact-us" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Cravings */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-sm min-w-md md:min-w-xl bg-white px-3 py-1 shadow-lg">
                    <form action="" className="flex justify-center items-center gap-4">
                        <button className="cursor-pointer">
                            <SearchIcon color="gray" />
                        </button>
                        <input className="text-black font-semibold w-full py-4 px-3 focus:outline-none placeholder:text-gray-600" placeholder="What are you craving for today?" />
                    </form>
                </div>
            </div>
        </section>
    )
}
