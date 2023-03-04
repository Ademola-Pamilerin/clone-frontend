"use client"
import Link from 'next/link'
import React from 'react'

function NavItem({ label, active, link, logo, first }) {
    return (
        <li className={`w-full ${first ? "-mt-4" : "mt-4"} font-2 font-bold py-4 pl-2 text-gray-300 text-xl hover:border-l-2 bg-gray-900  hover:border-orange-600 ${active ? "border-orange-600 border-l-2 bg-gray-900 shadow-sm shadow-gray-400" : ""}`}>
            <Link href={link}>
                <span>
                    {logo}
                </span>
                <span>
                    {label}
                </span>
            </Link>
        </li>
    )
}

export default NavItem