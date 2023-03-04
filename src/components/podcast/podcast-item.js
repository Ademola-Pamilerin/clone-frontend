import Image from "next/image"
import ImageA from "@/asset/a.jpeg"


const PodCastItem = ({ Avatar, username, friends }) => {
    return <div className="flex flex-row justify-center h-auto pl-2  py-2 first-of-type:mt-0 mt-3 last-of-type:mb-2 shadow-gray-50 border-t-white border-t-4">
        <div className="w-1/6 h-18 relative  mr-1 rounded-full overflow-hidden">
            <Image src={ImageA} alt={`${username} profile image `} className="object-cover object-top-center" fill loading={"lazy"} />
        </div>
        <div className="w-3/5 flex flex-col text-gray-500 font-bold ">
            <span className="block">
                {username}
            </span>
            <span className="block">
                {
                    friends > 1000 && friends < 1000000 ? friends / 1000 + "k" : friends > 1000000 ? friends / 1000000 + "M" : friends
                }</span>
        </div>
        <div className="w-1/5 h-auto flex items-center">
            😁😁
        </div>
    </div>
}
export default PodCastItem