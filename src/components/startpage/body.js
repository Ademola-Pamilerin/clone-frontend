import Image from "next/image"
import imageA from "@/asset/a.jpeg";
import imageP2 from "@/asset/k.jpg";
import imageP from "@/asset/b.jpg";
import imageB from "@/asset/speak.jpg";
import imageK from "@/asset/listen4.jpg";


const StartPageBody = () => {
    return (<>
        <div className="w-full px-5 h-auto flex mr:flex-row flex-col justify-center items-center ">
            <div className="mr:w-2/4 w-full mr:mr-2 flex flex-col items-center justify-center mr:h-middle h-auto xs:text-4xl text-2xl fclaont-extrabold font-serif text-gray-900 p-10" >
                Find, Explore, Create, Listen and Watch your Favourite Podcast and Video streams here!
                <span className="xs:text-xl text-base text-gray-400 text-left w-full">
                    The feeling of listening to videos as podcast can never be matched: communicating a good feeling that makes you explore your favourite podcasts and video with ease
                </span>
                <span className="flex xs:flex-row flex-col w-full my-5 justify-items-start xs:text-base text-sm ">
                    <span className="xlg:w-1/4 sm:w-2/5 mr:w-1/2 xs:w-2/3 w-3/4 cursor-pointer text-center xs:mr-2 mr:0 xs:mb-0 mb-2 py-3 xs:font-bold hover:text-gray-800 hover:bg-gray-200 bg-gray-800 text-gray-200">Get Started</span>
                    <span className="xlg:w-1/4 sm:w-2/5 mr:w-1/2 xs:w-2/3 w-3/4   text-center cursor-pointer xs:ml-2 ml-0 py-3 xs:font-bold bg-gray-800 text-gray-200 hover:text-gray-800 hover:bg-gray-200" >Learn more</span>
                </span>
                <div className="w-full flex flex-col justify-center items-cente">
                    <div className=" w-full flex flex-row margin-0">
                        <div className="relative lg:w-2/12 md:w-3/12 mr:w-4/12 xs:w-1/6 w-2/12 sm:h-20 h-10 z-0 rounded-full overflow-hidden">
                            <Image src={imageA}
                                alt={"Be a part of the community"} fill style={{
                                    objectPosition: "top center",
                                    objectFit: "cover"
                                }} />
                        </div>
                        <div className="relative -left-4  lg:w-2/12 md:w-3/12 mr:w-4/12 xs:w-1/6 w-2/12  sm:h-20 h-10 z-0 rounded-full overflow-hidden">
                            <Image src={imageP}
                                alt={"Be a part of the community"}
                                fill style={{
                                    objectPosition: "top center",
                                    objectFit: "cover"
                                }} />
                        </div>
                        <div className="relative -left-8 lg:w-2/12 md:w-3/12 mr:w-4/12 xs:w-1/6 w-2/12 sm:h-20 h-10 z-0 rounded-full overflow-hidden">
                            <Image
                                alt={"Be a part of the community"}
                                src={imageP2} fill style={{
                                    objectPosition: "top center",
                                    objectFit: "cover"
                                }} />
                        </div>
                    </div>
                    <span className="lg:w-2/3 w-full text-left ml-0  text-lg flex flex-col text-gray-400 ">
                        Join millions of creators today, And listeners worldwide
                    </span>
                </div>
            </div>
            <div className="mr:w-2/4 mr:m-0 m-10 w-full mr:ml-2 mr:h-middle h-auto flex flex-col justify-center items-center">
                <div className="w-full flex xs:flex-row flex-col-reverse relative justify-center items-center xs:m-0 m-2">
                    <div className="shadow-xl relative bg-white xs:-right-5 z-20 shadow-gray-300 xs:w-2/5 w-full p-6 text-sm font-semibold font-serif">
                        Create a video stream for us to watch, create podcasts for us to listen to <div className="h-2 w-1/2 border-b-4 border-orange-600"></div>
                    </div>
                    <div className="relative xlg:w-1/3 xs:w-2/5 w-full  h-60 z-0">
                        <Image src={imageB}
                            alt={"Become a speaker"}
                            fill style={{
                                objectPosition: "center",
                                objectFit: "cover"
                            }} />
                    </div>
                </div>
                <div className="w-full flex xs:flex-row-reverse flex-col-reverse relative justify-center items-center">
                    <div className="shadow-xl relative bg-white xs:-left-6 z-20 shadow-gray-300 xs:w-2/5 w-full  p-6 text-sm font-semibold font-serif">
                        Listen as podcast anywhere and anytime <div className="h-2 w-1/2 border-b-4 border-orange-600"></div>
                    </div>
                    <div className="relative xlg:w-1/3 xs:w-2/5 w-full h-60 z-0">
                        <Image src={imageK}
                            sizes={""}
                            alt={"Become a listener"}
                            fill style={{
                                objectPosition: "center",
                                objectFit: "cover"
                            }} />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default StartPageBody