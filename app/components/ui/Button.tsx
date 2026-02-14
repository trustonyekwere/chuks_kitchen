import Link from "next/link"

type ButtonLinkProps = {
    text: string
    href: string
}

export default function ButtonLink({ text, href }: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className="
                inline-block
                w-fit
                rounded-[10px]
                bg-[#FF7A18]
                px-10
                py-4
                text-sm
                font-medium
                text-white
                transition-all
                duration-400
                hover:bg-orange-500
                hover:-translate-y-1
            "
            >
            {text}
        </Link>
    )
}
