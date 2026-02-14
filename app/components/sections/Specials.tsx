import Image from "next/image"
import ButtonLink from "../ui/Button";

const Special = [
    {
        id: "1",
        img: "/5.png",
        title: "Spicy Tilapia Pepper Soup",
        description: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    },
    {
        id: "2",
        img: "/1.png",
        title: "Jollof Rice & Fried Chicken",
        description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    },
    {
        id: "3",
        img: "/1.png",
        title: "Jollof Rice & Fried Chicken",
        description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    },
    {
        id: "4",
        img: "/1.png",
        title: "Jollof Rice & Smoked Chicken",
        description: "Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.",
    },
    {
        id: "5",
        img: "/6.png",
        title: "Jollof Rice & Fried Chicken",
        description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    },
    {
        id: "6",
        img: "/7.png",
        title: "Egusi Soup & Pounded Yam",
        description: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    },
]

const Specials = () => {
    return (
        <div className="bg-[#F3F4F6] flex justify-center items-center py-10" id="specials">
            <div className="max-w-7xl justify-center text-center items-center m-0 py-10">
                <h1 className="text-blue font-bold text-[32px] py-3">Chef's Specials</h1>

                <div className="max-w-7xl justify-center items-center flex">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">

                        {/* specials cards */}
                        {Special.map((specials) => (
                            <div
                                key={specials.id}
                                className="bg-white h-auto w-full rounded-lg"
                            >
                                <div className="w-full">
                                    <Image
                                        src={specials.img} 
                                        alt="specials"
                                        width={400}    
                                        height={400}    
                                        priority
                                    />
                                </div>
                                <div className="px-5 flex-column max-w-xs text-start text-blue">
                                    <h1 className="text-xl pt-5 font-semibold">
                                        {specials.title}
                                    </h1>
                                    <p className="pt-3 font-medium text-sm text-gray-400">
                                        {specials.description}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center px-5 py-8">
                                    <div>
                                        <p className="text-orange">₦3,500</p>
                                    </div>
                                    <div>
                                        <ButtonLink text="Add to Cart" href="/" />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="my-5">
                    <ButtonLink text="View All Specials" href="/contact-us" />
                </div>
            </div>
        </div>
    )
}

export default Specials
