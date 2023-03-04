import GroupCard from "../group/group-card"
import ReviewCard from "../review/review-card"

const DashBoardVideo = () => {
    return <div className="w-full md:px-4 mdlg:pt-2 pt-1 flex md:flex-row flex-col-reverse mr:h-auto h-full justify-between items-center">
        <div className="md:w-3/4 mr:w-4/12 mr:w-10/12 w-full shadow-md bg-gray-800 overflow-y-scroll md:h-minV h-full ">
            <div className="w-full text-center font-bold mr:text-2xl text-xl text-gray-300 my-3">Your Review</div>
            <div className="w-full flex flex-col justify-center items-center px-5 ">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
        <div className="w-4 h-9">

        </div>
        <div className="md:w-3/6 mr:w-4/12 mr:w-10/12 w-full shadow-md bg-gray-800 overflow-y-scroll md:h-minV h-full ">
            <div className="w-full text-center font-bold mr:text-2xl text-xl text-gray-300 my-3">Your Groups</div>
            <div className="w-full flex flex-col justify-center items-center px-5 ">
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
            </div>
        </div>

    </div>
}
export default DashBoardVideo