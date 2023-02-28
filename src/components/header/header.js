import Link from 'next/link'
import React from 'react'
import Navigation from '../navigation/nav'

function Header() {
    return (
        <div className='flex flex-row justify-between align-middle w-full px-4 h-header'>
            <span className='flex flex-row font-bold mr:text-2xl text-3xl justify-center mr:w-2/12 xs:w-2/6 w-2/5 align-middle items-center px-2 h-full'>
                <span className='block text-orange-500 pr-1.5'>
                    <Link href={"/"}> &</Link>
                </span>
                <span className='block text-gray-700'>
                    <Link href={"/"}>PodVid</Link>
                </span>
            </span>
            <span className='mr:block hidden w-6/12 align-middle items-center h-full'>
                <Navigation />
            </span>
            <span className='md:flex hidden align-middle items-center justify-center lg:h-full h-0 p-7 text-gray-200 cursor-pointer lg:w-1/6 w-1/4 text-center bg-gray-900 text-xl font-bold'>
                Get Started
            </span>
            <span className='mr:hidden h-full w-1/4 text-xl font-bold flex items-center justify-center cursor-pointer'>
                Menu
            </span>
        </div>
    )
}

export default Header