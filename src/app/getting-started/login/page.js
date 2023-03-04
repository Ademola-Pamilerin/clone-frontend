import Image from "next/image"
import ImageBack from '@/asset/call.jpg'
import Link from "next/link"


const LoginPage = () => {
    return (<div className=" relative w-full lg:h-minZ mr:h-auto sm:h-auto h-auto flex flex-col items-center justify-center bg-cyan-900 mt-1">
        <div className="w-full h-auto relative flex flex-col lg:justify-center lg:items-center items-center">
            <div className="lg:hidden block md:mt-0 mt-5 font-bold relative z-20 text-center mb-4 w-full text-orange-400 mr:text-3xl text-xl">
                Welcome Back 😘
            </div>
            <div className="sm:w-4/5 w-full lg:flex lg:h-auto lg:flex-row-reverse lg:shadow-lg shadow-none lg:shadow-gray-800">
                <div className="lg:w-1/2 lg:h-minL w-full h-minV relative">
                    <Image src={ImageBack} alt={"Background Image"} sizes={"100%"} fill priority style={{
                        objectFit: "cover",
                        objectPosition: "top center",
                        width: "100%",
                        height: "100%"
                    }} />
                </div>
                <div className=" lg:w-1/2 w-full flex lg:flex-col lg:justify-evenl lg:items-center  justify-center align-middle relative z-20 py-8">
                    <div className="w-full h-auto py-5 text-center lg:block hidden text-4xl font-bold text-orange-400">Welcome Back😊</div>
                    <form className="lg:px-4 lg:w-4/5 mr:w-3/4 flex flex-col w-full px-10 justify-center items-center">
                        <div className="w-full">
                            <input type={"email"} placeholder="Email or Username here" className="w-full py-4 px-2 font-semibold bg-cyan-800 text-gray-100 shadow-xl shadow-slate-900 outline-none hover:outline-none active:outline-none" />
                        </div>
                        <div className="mt-5 mb-3 w-full">
                            <input type={"password"} placeholder="Password here" className="w-full py-4 px-2 font-semibold bg-cyan-800 text-gray-100 shadow-xl shadow-slate-900 outline-none hover:outline-none active:outline-none" />
                        </div>
                        <div className="flex flex-row w-full justify-between font-semibold">
                            <div className="text-gray-200">
                                <input type={"checkbox"} className="" /> Remember me
                            </div>
                            <div className="text-cyan-800 cursor-pointer">
                                forgotten password
                            </div>
                        </div>
                        <div className="w-full mt-3">
                            <button className="font-semibold text-base rounded-md bg-orange-400 text-gray-800 px-8 py-2">Submit</button>
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
        </div>
        <div className="mt-0 sm:absolute relative bottom-2 font-semibold text-lg text-orange-200 w-5/6 text-center">
            <Link href="/getting-started/register">Don't hane an account, Register Here Instead</Link>
        </div>

    </div>)
}


export default LoginPage