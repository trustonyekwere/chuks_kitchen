import {House, Coins, HandshakeIcon} from "lucide-react"

const Category = [
    {
        icon: House,
        title: "Buy a home",
        description: "Buying a home provides comfort and safety, and we are here to assist you in finding property for sale."
    },
    {
        icon: Coins,
        title: "Rent a home",
        description: "Renting a home provides flexibility and convenience, and we are here to assist you in finding rental property."
    },
    {
        icon: HandshakeIcon,
        title: "Sell a home",
        description: "Selling a home should be easy and hassle-free, and we are here to assist you in selling your property."
    },
]

const Categories = () => {
    return (
        <div className="bg-white/90 flex justify-center items-center py-10" id="Categories">
            <div className="max-w-6xl justify-center text-center items-center m-0 py-10">
                <h1 className="text-[#050B1C] font-bold text-3xl md:text-4xl py-3">Popular Categories</h1>

                <div className="max-w-6xl justify-center items-center flex">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">

                        {/* categories cards */}
                        {Category.map((categories) => (
                            <div
                                key={categories.title}
                                className="bg-white h-auto w-80 rounded-lg justify-center items-center py-10 px-6 hover:scale-105 transition-all duration-400"
                            >
                                <div className="justify-center flex items-center pb-4">
                                    <div className="bg-[#0e1527] justify-center items-center flex rounded-xl h-15 w-15 p-3">
                                        <categories.icon size={20} />
                                    </div>
                                </div>
                                <h1 className="text-lg text-[#1F2937]">
                                    {categories.title}
                                </h1>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
