import PodCastItem from "../podcast/podcast-item"
import ImageA from "@/asset/a.jpeg"
import Image from "next/image"

const ReviewCard = () => {
    return (
        <div className="mr:w-11/12 w-full md:h-full h-auto bg-slate-800 shadow-md first-of-type:mt-0 mt-4 text-gray-300 mx-2 flex md:flex-row flex-col justify-evenly border-gray-50 border-2 items-center last-of-type:mb-2">
            <div className="w-1/6 h-full mt-5">
                <div className='w-full h-24 rounded-full relative overflow-hidden'>
                    <Image
                        alt={"Be a part of the community"}
                        src={ImageA} fill className={"w-full object-cover object-top-center"} />
                </div>
            </div>

            <div className="w-3/4 h-auto">
                <div className="flex w-full justify-between font-bold">
                    <span className="inline-block mr:text-xl"> 
                        ola Dev
                    </span>
                    <span className="inline-block mr:text-xl">20k</span>

                </div>
                <div className="flex ">
                    <span className="md:inline-block hidden">Ade-akanfe Ademola</span>
                    <span className="text-base">@ademola-pamilerin</span>
                </div>
                <div className="flex justify-between text-lg">
                    <span className="inline-block">rating stars</span>
                    <span className="inline-block">3 hours ago </span>
                </div>
                <div className="md:block hidden">
                    dhwdhfdeqwe qewyqlweflqhwe qweqlvhweqhweq ew qwhevqlhewvfq we
                    qhwvelqh dhwdhfdeqwe qewyqlweflqhwe qweqlvhweqhweq ew qwhevqlhew
                    vfq weqhwvelqhdhwdhfdeqwe qewyqlweflqhwe qweqlvhweqhweq ew qwhevqlhe
                    wvfq weqhwvelqh vfq weqhwvelqhdhwdhfdeqwe qewyqlweflqhwe qweqlvhweqhweq
                </div>
                <div>
                    <PodCastItem Avatar={ImageA} friends={220000} username={"dev demola"} />
                </div>
            </div>
        </div>)
}
export default ReviewCard