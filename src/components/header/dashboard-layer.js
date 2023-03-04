import DashBoardNavigation from "../navigation/dashboard-nav"
import HeadDashBoard from "../util/-dashboard"
import DashBoardVideo from "../util/dashboard-bottom"
import HeadMiddle from "../util/head-middle"
import Middle2 from "../util/middle-2"

const DashBoardLayoutHeading = ({ children }) => {
    return <div className="w-full h-screen bg-slate-900 flex flex-row items-center justify-center">
        <div className="mdlg:block hidden w-2/12 relative rounded-tl-xl rounded-bl-xl shadow-sm shadow-gray-300 h-minZ overflow-auto ">
            <div className="w-full text-center text-gray-200 text-xl font-bold mt-1">
                <span className="mr-1 text-orange-500">&</span>PodVid
            </div>
            <div className="w-full h-auto pt-8 flex justify-center items-center">
                <DashBoardNavigation />
            </div>
            <div className="flex flex-row relative items-center py-4 justify-center bottom-0 text-center w-full font-bold text-gray-100 text-base">
                😢LogOut
            </div>
        </div>
        <div className="w-2 md:block hidden">
        </div>
        <div className="mdlg:w-4/5 w-full p-1 md:rounded-tr-xl md:rounded-br-xl h-minZ shadow-sm shadow-gray-300 overflow-y-scroll">
            <HeadDashBoard />
            <HeadMiddle />
            <Middle2 />
            <DashBoardVideo />
        </div>
    </div>
}
export default DashBoardLayoutHeading