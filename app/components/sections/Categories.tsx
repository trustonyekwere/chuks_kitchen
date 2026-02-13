import Image from "next/image"

const Category = [
    {
        img: "/1.png",
        title: "Buy a home",
    },
    {
        img: "/2.png",
        title: "Rent a home",
    },
    {
        img: "/3.png",
        title: "Sell a home",
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
                                className="bg-white h-auto w-80 rounded-lg hover:scale-105 transition-all duration-400"
                            >
                                <div className="w-full pb-4">
                                    <Image
                                        src={categories.img} 
                                        alt="categories"
                                        width={200}    
                                        height={200}    
                                        priority
                                    />
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
