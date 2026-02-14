import Image from "next/image"

const Category = [
    {
        id: "1",
        img: "/1.png",
        title: "Jollof Delights",
    },
    {
        id: "2",
        img: "/2.png",
        title: "Swallow & Soups",
    },
    {
        id: "3",
        img: "/3.png",
        title: "Grills & BBQ",
    },
    {
        id: "4",
        img: "/4.png",
        title: "Sweet Treats",
    },
    {
        id: "5",
        img: "/2.png",
        title: "Jollof Delights",
    },
    {
        id: "6",
        img: "/3.png",
        title: "Jollof Delights",
    },
]

const Categories = () => {
    return (
        <div className="bg-white/90 flex justify-center items-center py-10" id="categories">
            <div className="max-w-6xl justify-center text-center items-center m-0 py-10">
                <h1 className="text-blue font-bold text-[32px] py-3">Popular Categories</h1>

                <div className="max-w-6xl justify-center items-center flex">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">

                        {/* categories cards */}
                        {Category.map((categories) => (
                            <div
                                key={categories.id}
                                className="bg-white h-auto w-full rounded-lg hover:-translate-y-1 transition-all duration-400"
                            >
                                <div className="w-full">
                                    <Image
                                        src={categories.img} 
                                        alt="categories"
                                        width={400}    
                                        height={400}    
                                        priority
                                    />
                                </div>
                                <h1 className="text-xl py-10 font-semibold text-blue">
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
