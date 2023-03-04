'use client'
import { useRouter } from 'next/navigation'
import NavItem from './nav-item'

const Side = ({ active }) => {
    const router = useRouter()
    const clicked = () => {
        router.push("/getting-started/register")
    }
    return <div className="w-full h-full relative flex flex-col justify-center items-center">
        <ul className='h-3/5 items-center flex flex-col justify-evenly text-gray-200 text-3xl'>
            <NavItem label={"Home"} active={active == "home"} link={"/"} />
            <NavItem label={"About"} active={active == "about"} link={"/about"} />
            <NavItem label={"Contact"} active={active == "contact"} link={"/contact"} />
            <NavItem label={"Features"} active={active == "features"} link={"/getting-started"} />
        </ul>
        <div onClick={clicked} className='relative bottom-1 flex  align-middle items-center justify-center h-auto p-6 text-gray-200 cursor-pointer w-3/4 text-center bg-gray-900 text-xl font-bold rounded-md'>
            Get Started
        </div>
    </div>
}
export default Side