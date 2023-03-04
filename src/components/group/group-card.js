import Image from "next/image"
import ImageB from "@/asset/b.jpg"

const GroupCard = () => {
    return <div className="w-4/5 px-5 text-gray-200 flex flex-row border-2 justify-evenly border-gray-300 py-2 first-of-type:mt-0 mt-2 last-of-type:mb-2 mb-0">
        <div className="md:w-1/5  w-3/5 md:mr-2 mr:1 flex flex-col justify-evenly h-auto">
            <div className='relative md:h-10 h-20 md:w-auto w-full md:rounded-full md:overflow-hidden overflow-auto'>
                <Image
                    alt={"Be a part of the community"}
                    src={ImageB} fill className={"w-full object-cover object-top-center"} />
            </div>
        </div>
        <div className="flex flex-col md:w-4/5 w-full text-center  md:h-full h-auto justify-center items-center">
            <div className="md:text-xl md:text-center mr:text-2xl font-semibold text-small text-gray-200 w-full md:text-left text-center">
                Ademola Fedration
            </div>
            <div className="text-lg text-gray-500 flex w-full justify-evenly items-center">
                <div className="w-2/3 mr:text-xl text-sm">87K</div>
                <button className="cursor-pointer mr:text-xl text-sm text-gray-50 py-1 md:px-6 mr:px-7 px-5 bg-orange-400">Exit</button>
            </div>
        </div>

    </div>
}
export default GroupCard