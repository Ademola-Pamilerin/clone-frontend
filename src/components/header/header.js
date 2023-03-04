'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import Navigation from '../navigation/nav'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import Side from '../navigation/side'

function Header({ active }) {
    const [open, setOpen] = useState(false)
    const refVal = useRef()


    const trigger = (event) => {
        event.preventDefault()
        setOpen(prevVal => !prevVal)
    }


    useEffect(() => {
        refVal.current = document.querySelector("#portal")
        document.querySelector("#portal").className = `mr:hidden block bg-black h-minZ absolute z-50 top-16 left-0 bg-gray-300 w-full ${open ? "translate-x-0" : "translate-x-offScreenLeft"} transition-all `
    })
    useEffect(() => {
        if (open) {
            document.querySelector("body").className = "overflow-hidden"
        } else {
            document.querySelector("body").className = ""
        }
        return () => {
            document.querySelector("body").className = ""
        }
    })


    const router = useRouter();
    const clicked = () => {
        router.push("/getting-started/register")
    }
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
                <Navigation active={active} />
            </span>
            <span onClick={clicked} className='md:flex hidden align-middle items-center justify-center lg:h-full mr:h-full h-0 p-4 text-gray-200 cursor-pointer lg:w-1/6 w-1/4 text-center bg-gray-900 text-xl font-bold'>
                <span>
                    Get Started
                </span>
            </span>
            <span onClick={(event) => trigger(event)} className='mr:hidden h-full w-1/4 text-xl font-bold flex items-center justify-center cursor-pointer'>
                Menu
            </span>
            <>
                {(open && refVal.current) ? createPortal(<div className='relative bg-gray-800 w-3/4 h-full opacity-1'><Side active={active} /></div>, refVal.current) : null}
            </>
        </div>
    )
}

export default Header