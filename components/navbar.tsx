"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [user, setUser] = useState(true);
    
    return(
        <div className="flex items-center justify-between py-4">
            <Link href="/">
                <Image
                    src="/icons/logo.svg"
                    alt="logo"
                    height={32}
                    width={32}
                    className="w-28 sm:w-32 lg:w-40"
                />
            </Link>

            {user ? (
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full">
                        <Image
                            src="/icons/credit_star.svg"
                            height={32}
                            width={32}
                            alt="Credit icon"
                            className="w-5"
                        />
                        <p className="text-sm font-medium text-gray-600">Credit left: 10</p>
                    </button>
                    <button className="flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full">
                        <p>Hi, Nikolas</p>
                        <Image
                            src="/images/profile_icon.png" 
                            height={32}
                            width={32}
                            alt="user"
                        />
                    </button>
                </div>
            ): (
                <div className="flex items-center gap-2 sm:gap-5">
                    <Link href="/pricing">
                        Pricing
                    </Link>
                    <button className="bg-zinc-800 text-white px-7 py-2 sm:px-2 text-sm rounded-full cursor-pointer">Login</button>
                </div>
            )}
        </div>
    )
}