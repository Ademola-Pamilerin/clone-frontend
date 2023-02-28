import React from 'react'
import NavItem from './nav-item'

function Navigation() {
    return (
        <ul className='h-full items-center flex justify-evenly text-gray-800'>
            <NavItem label={"Home"} active/>
            <NavItem label={"About"} />
            <NavItem label={"Contact"} />
            <NavItem label={"Features"} />
        </ul>
    )
}

export default Navigation