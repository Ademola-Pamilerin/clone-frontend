import Image from "next/image"
import ImageB from "@/asset/b.jpg"

const RequestCard = () => {
    return <>
        <div className="lg:flex flex-col hidden h-auto md:w-5/6 w-11/12 bg-slate-800 shadow-slate-900 shadow-sm h-2/5 pr-2 text-gray-100 flex justify-evenly first-of-type:mt-0 mt-4 last-of-type:mb-3 mb-0 md:pb-0 pb-2">
            <div className="w-4/5 w-full flex item-center justify-center">
                <div className='relative h-28 w-2/4 overflow-hidden'>
                    <Image
                        alt={"Be a part of the community"}
                        src={ImageB} fill className={"w-full object-cover object-top-center"} />
                </div>
            </div>
            <div className="h-3/5 md:w-auto w-full flex justify-center items-center flex-col">
                <div className="mr:text-xl  text-sm md:font-bold font-semibold w-full text-center">
                    Ade-akanfe Ademola
                </div>
                <div className="text-center w-full md:text-xl mr:text-base text-sm text-gray-400">
                    @adeakanfea
                </div>

                <div className="flex w-full justify-evenly flex-row">
                    <button className="w-1/3 cursor-pointer bg-orange-500 text-gray-300 w-1/2 py-2 md:font-bold md:text-xl mr:text-lg text-sm font-semibold">Accept</button>
                    <div className="md:h-2 w-2"></div>
                    <button className="w-1/3 cursor-pointer bg-orange-500 text-gray-300 w-1/2 py-2 md:px-0 px-3 md:font-bold md:text-xl text-sm font-semibold">Decline</button>
                </div>
            </div>
        </div>
        <div className="lg:hidden md:w-5/6 w-11/12 bg-slate-800 shadow-slate-900 shadow-sm h-2/5 pr-2 text-gray-100 flex justify-evenly first-of-type:mt-0 mt-4 last-of-type:mb-3 mb-0 md:pb-0 pb-2">
            <div className="md:w-4/5 w-3/12">
                <div className='relative h-full w-full overflow-hidden'>
                    <Image
                        alt={"Be a part of the community"}
                        src={ImageB} fill className={"w-full object-cover object-top-center"} />
                </div>
            </div>
            <div className="h-3/5 md:w-auto w-full flex justify-center items-center flex-col">
                <div className="mr:text-xl  text-sm md:font-bold font-semibold w-full text-center">
                    Ade-akanfe Ademola
                </div>
                <div className="text-center w-full md:text-xl mr:text-base text-sm text-gray-400">
                    @adeakanfea
                </div>

                <div className="flex w-4/5 justify-evenly md:flex-col">
                    <button className="md:w-full cursor-pointer bg-orange-500 text-gray-300 w-1/2 py-2 md:font-bold md:text-xl mr:text-lg text-sm font-semibold">Accept</button>
                    <div className="md:h-2 w-2"></div>
                    <button className="md:w-full cursor-pointer bg-orange-500 text-gray-300 w-1/2 py-2 md:px-0 px-3 md:font-bold md:text-xl text-sm font-semibold">Decline</button>
                </div>
            </div>
        </div>
    </>
}
export default RequestCard