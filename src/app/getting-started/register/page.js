"use client"

import Image from "next/image"
import ImageBack from '@/asset/learn.jpg'
import ImageLive from "@/asset/live.jpg"
import ImageSpeak from "@/asset/speak2.jpg"
import Link from "next/link"
import { useState } from 'react'

const Register = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(1)
    const lastIndex = 2;

    const clickNext = (event) => {
        event.preventDefault()
        if (currentIndex === lastIndex) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(prevIndex => prevIndex + 1)
        }
    }
    const clickPrevious = (event) => {
        event.preventDefault()
        if (currentIndex === 0) {
            setCurrentIndex(lastIndex)
        } else {
            setCurrentIndex(prevVal => prevVal - 1)
        }
    }

    const submitForm = (event) => {
        event.preventDefault()
    }

    return (<div className=" relative w-full sm:h-min h-auto flex flex-col items-center justify-center bg-cyan-900 mt-1">
        <div className="w-full relative flex flex-col lg:justify-center lg:items-center items-center">
            <div className="lg:hidden block font-bold relative z-20 text-center mb-4 w-full text-orange-400 mr:text-3xl text-xl">
                Welcome Back 😘
            </div>
            <div className="sm:w-4/5 w-full lg:flex lg:h-minL lg:flex-row-reverse lg:shadow-lg shadow-none lg:shadow-gray-800">
                <div className="lg:w-1/2 lg:h-minL w-full h-minV relative">
                    <Image className={`${currentIndex === 0 ? "translate-x-0" : currentIndex === 1 ? "translate-x-offScreenLeft" : "translate-x-offScreenRight"}`} src={ImageBack} alt={"Background Image"} sizes={"100%"} fill priority style={{
                        objectFit: "cover",
                        objectPosition: "top center",
                        width: "100%",
                        height: "100%"
                    }} />
                    <Image className={`${currentIndex === 1 ? "translate-x-0" : currentIndex === 2 ? "translate-x-offScreenLeft" : "translate-x-offScreenRight"}`} src={ImageSpeak} alt={"Background Image"} sizes={"100%"} fill priority style={{
                        objectFit: "cover",
                        objectPosition: "top center",
                        width: "100%",
                        height: "100%"
                    }} />
                    <Image className={`${currentIndex === 2 ? "translate-x-0" : currentIndex === 1 ? "translate-x-offScreenLeft" : "translate-x-offScreenRight"}`} src={ImageLive} alt={"Background Image"} sizes={"100%"} fill style={{
                        objectFit: "cover",
                        objectPosition: "center center",
                        width: "100%",
                        height: "100%"
                    }} />
                </div>
                <div className="fdlative lg:w-1/2 w-full flex lg:flex-col lg:justify-evenl lg:items-center  justify-center align-middle relative z-20 py-8">
                    <div className="w-full h-auto py-5 text-center lg:block hidden text-4xl font-bold text-orange-400">Welcome 😊😊</div>
                    <form className="lg:px-4 lg:w-4/5 mr:w-3/4 flex flex-col w-full px-10 justify-center items-center">
                        <div className={`w-full ${currentIndex === 0 ? "block" : "hidden"}`}>
                            <input type={"text"} required placeholder="First Name Here" className={` w-full py-4 px-2 font-semibold bg-cyan-800 text-gray-100 shadow-xl shadow-slate-900 outline-none hover:outline-none active:outline-none`} />
                        </div>
                        <div className={`${currentIndex === 0 ? "block" : "hidden"} mt-5 mb-3 w-full`}>
                            <input type={"text"} placeholder="Lastname" required className={` w-full py-4 px-2 font-semibold bg-cyan-800 text-gray-100 shadow-xl shadow-slate-900 outline-none hover:outline-none active:outline-none`} />
                        </div>
                        <div className={`${currentIndex === 1 ? "block" : "hidden"} mt-5 w-full`}>
                            <input type={"email"} placeholder="Email Here" className={`w-full py-4 px-2 font-semibold bg-cyan-800 text-gray-100 shadow-xl shadow-slate-900 outline-none hover:outline-none active:outline-none`} />
                        </div>
                        <div className={`mt-5 mb-3 w-full ${currentIndex === 1 ? "block" : "hidden"}`}>
                            <input type={"text"} placeholder="Preferred Username here" className={`w-full py-4 px-2 font-semibold bg-cyan-800 text-gray-100 shadow-xl shadow-slate-900 outline-none hover:outline-none active:outline-none `} />
                        </div>
                        <div className={`mt-5 w-full ${currentIndex === 2 ? "block" : "hidden"}`}>
                            <input type={"password"} placeholder="Password here" className={`w-full py-4 px-2 font-semibold bg-cyan-800 text-gray-100 shadow-xl shadow-slate-900 outline-none hover:outline-none active:outline-none`} />
                        </div>
                        <div className={`mt-5 mb-3 w-full ${currentIndex === 2 ? "block" : "hidden"} `}>
                            <input type={"password"} placeholder="Confirm your Password here" className={`w-full py-4 px-2 font-semibold bg-cyan-800 text-gray-100 shadow-xl shadow-slate-900 outline-none hover:outline-none active:outline-none`} />
                        </div>
                        {currentIndex === lastIndex && <div className="flex flex-row w-full justify-between font-semibold">
                            <div className="text-gray-200">
                                <input type={"checkbox"} className="" /> Remember me
                            </div>
                        </div>}
                        <div className="w-full mt-3 flex justify-start items-start">
                            {currentIndex > 0 && <button onClick={(event) => clickPrevious(event)} className="font-semibold text-base rounded-md bg-orange-400 text-gray-800 px-8 py-2" >{currentIndex === 0 ? "" : "Prev"}</button>}
                            <button onClick={currentIndex !== lastIndex ? (event) => clickNext(event) : (event) => submitForm(event)} className={`${currentIndex !== 0 && "ml-5"} font-semibold text-base rounded-md bg-orange-400 text-gray-800 px-8 py-2`}>{currentIndex === lastIndex ? "Submit" : "Next"}</button>
                        </div>
                        <div className="mt-4 w-full flex flex-row items-start justify-start">
                            <span className="block text-cyan-600 font-semibold">Continue</span>
                            <span className="flex ml-2">
                                <span className="block text-cyan-600 font-semibold">Icon1</span>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div >
        <div className="mt-5 relative font-semibold text-lg text-orange-200 w-5/6 text-center">
            <Link href="/getting-started/login">Already have an account, login Here Instead</Link>
        </div>

    </div >)
}


export default Register