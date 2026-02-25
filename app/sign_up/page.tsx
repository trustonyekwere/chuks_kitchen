"use client"

import Footer from "../components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Mail, LockKeyhole, PhoneIcon } from "lucide-react"
import { useState } from "react"

// components
import BackToTop from "../components/ui/BackToTop";

export default function Sign_up() {
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    
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
                        <Image
                            src="/Chuks_Kitchen.png"
                            alt="Chuks Kitchen"
                            width={183}
                            height={41}
                            priority
                            draggable="false"
                        />
                    </div>

                    <h2 className="text-center text-blue text-2xl font-semibold mt-2 mb-8">
                        Create your Account
                    </h2>

                    {/* Form */}
                    <form action="/" method="POST">
                        {/* Email */}
                        <label className="text-sm text-gray-600">Email</label>
                        <div className="relative mt-1 mb-5">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18}/>
                            <input
                            type="text"
                            name="email"
                            placeholder="Enter email"
                            className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#FF7A18] text-black"
                            />
                        </div>

                        {/* Phone */}
                        <label className="text-sm text-gray-600">Phone number</label>
                        <div className="relative mt-1 mb-5">
                            <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18}/>
                            <input
                            type="phone"
                            name="phone"
                            placeholder="Enter phone number"
                            className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#FF7A18] text-black"
                            />
                        </div>

                        {/* Password */}
                        <label className="text-sm text-gray-600">Password</label>
                        <div className="relative mb-5">
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
                                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                >
                                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <label className="text-sm text-gray-600">Confirm password</label>
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
                                onClick={() => setShowPassword2(!showPassword2)}
                                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                >
                                {showPassword2 ? <EyeOff size={18}/> : <Eye size={18}/>}
                            </button>
                        </div>

                        <div className="text-left mt-3 flex items-center space-x-2">
                            <input type="checkbox" name="" className="" id="" />
                            <p className="text-gray-600 text-sm">I agree to the <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a></p>
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
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-500 hover:underline">
                        Sign In
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