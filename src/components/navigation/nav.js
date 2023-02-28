import React from 'react'
import NavItem from './nav-item'

function Navigation({ active }) {
    return (
        <ul className='h-full items-center flex justify-evenly text-gray-800'>
            <NavItem label={"Home"} active={active == "home"} link={"/"} />
            <NavItem label={"About"} active={active == "about"} link={"/about"} />
            <NavItem label={"Contact"} active={active == "contact"} link={"/contact"} />
            <NavItem label={"Features"} active={active == "features"} link={"/getting-started"} />
        </ul>
    )
}

export default Navigation