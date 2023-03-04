import Image from "next/image"
import AdeImage from '@/asset/k.jpg'


const HeadDashBoard = (props) => {
    return <div className="w-full flex md:justify-between justify-evenly md:px-2 px-1 pt-1 items-center h-auto">
        <div className="mdlg:hidden block text-xl text-gray-400 font-bold mdlg:mr-0 mr-2">
            Menu
        </div>
        <div className="w-3/5 md:flex hidden shadow-sm bg-inherit shadow-gray-500 justify-center items-center px-3 rounded-full rounded-r-full">
            <span className="h-full font-bold md:text-xl text-sm text-gray-50">@</span>
            <form className="w-full ">
                <input type={"text"} placeholder="search here" className="w-full bg-inherit md:py-4 py-2 px-2 font-semibold text-gray-100 text-base outline-none hover:outline-none active:outline-none" />
            </form>
        </div>

        <div className="w-1/4 flex justify-evenly items-center text-gray-200 text-sm">
            <span>Mes</span>
            <span>Not</span>
        </div>
        <div className="w-2/5 flex md:justify-evenly justify-center">
            <div className="w-3/5 md:text-sm text-xs font-semibold text-gray-300 flex items-center justify-center h-auto">
                <span className="block text-xs">Ademola</span>
            </div>
            <div className="relative w-1/6 h-10 rounded-full overflow-hidden">
                <Image alt={"My profile page image"} src={AdeImage} loading="lazy" className="object-cover object-top-center" fill sizes={"100%"} />
            </div>
        </div>
    </div>
}
export default HeadDashBoard