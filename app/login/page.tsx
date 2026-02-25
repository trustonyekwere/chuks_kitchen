"use client"

import { Island_Moments } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Mail, LockKeyhole } from "lucide-react"
import { useState } from "react"

// components
import BackToTop from "../components/ui/BackToTop";

const logoFont = Island_Moments({
    subsets: ["latin"],
    weight: ["400"],
})

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
        <>
            <div className="min-h-screen grid md:grid-cols-2 bg-white">
                {/* LEFT SIDE */}
                <div className="relative hidden md:flex items-center justify-center">
                    <Image
                    src="/image_11.png"
                    alt="Food background"
                    fill
                    priority
                    className="object-cover"
                    />

                    {/* Orange overlay */}
                    <div className="absolute inset-0 bg-[#FF7A18]/70" />

                    {/* Content */}
                    <div className="relative z-10 max-w-md text-white px-10 text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Chuks Kitchen
                        </h1>

                        <p className="leading-relaxed text-lg text-white/90">
                            Your journey to delicious, authentic Nigerian meals starts here.
                            Sign up or log in to order your favorites today!
                        </p>
                    </div>
                </div>


                {/* RIGHT SIDE */}
                <div className="flex items-center justify-center px-6 py-12">
                    <div className="w-full max-w-md">

                    {/* Logo */}
                    <div className="justify-center items-center flex">
                        <h1 className={`${logoFont.className} text-[40px] text-orange`}>Chuks Kitchen</h1>
                    </div>

                    <h2 className="text-center text-blue text-2xl font-semibold mt-2 mb-8">
                        Login your Account
                    </h2>

                    {/* Form */}
                    <form action="/" method="POST">
                        {/* Email */}
                        <label className="text-sm text-gray-600">Email or phone number</label>
                        <div className="relative mt-1 mb-5">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18}/>
                            <input
                            type="text"
                            name="email"
                            placeholder="name@gmail.com"
                            className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#FF7A18] text-black"
                            />
                        </div>


                        {/* Password */}
                        <label className="text-sm text-gray-600">Password</label>
                        <div className="relative mt-1">
                            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18}/>
                            <input
                            type={showPassword ? "text" : "password"}
                            placeholder="******"
                            name="password"
                            className="w-full border border-gray-300 rounded-md pl-10 pr-10 py-2 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#FF7A18] text-black"
                            />

                            <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                            {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                            </button>
                        </div>

                        <div className="text-right mt-2">
                            <Link href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                            </Link>
                        </div>


                        {/* Continue Button */}
                        <button name="submit" className="cursor-pointer w-full mt-6 bg-[#FF7A18] text-white py-2.5 rounded-md font-medium hover:opacity-90 transition">
                            Continue
                        </button>
                    </form>


                    <div className="text-center text-gray-400 text-sm my-6">
                        Or continue with
                    </div>


                    {/* Google */}
                    <button className="cursor-pointer w-full border rounded-md py-2.5 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                        <Image src="/G.png" alt="google" width={24} height={24}/>
                        <div className="text-blue">
                            Continue with Google
                        </div>                        
                    </button>


                    {/* Facebook */}
                    <button className="cursor-pointer w-full border rounded-md py-2.5 flex items-center justify-center gap-2 mt-4 hover:bg-gray-100 transition">
                        <Image src="/facebook.png" alt="facebook" width={14} height={14}/>
                        <div className="text-blue">
                            Continue with Facebook
                        </div>                        
                    </button>


                    {/* Signup */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don’t have an account?{" "}
                        <Link href="/sign_up" className="text-blue-500 hover:underline">
                        Create an account
                        </Link>
                    </p>

                    </div>
                </div>
            </div>

            {/* Back To Top Button */}
            <BackToTop />
        </>
    )
}