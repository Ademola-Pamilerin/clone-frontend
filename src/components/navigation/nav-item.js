import Link from 'next/link'
import React from 'react'

function NavItem({ label, active }) {
    return (
        <li className={`font-2 font-bold pb-1 hover:border-b-2 hover:border-orange-600 ${active ? "border-orange-600 border-b-2" : ""}`}>
            <Link href={"/"}>{label}</Link>
        </li>
    )
}

export default NavItem