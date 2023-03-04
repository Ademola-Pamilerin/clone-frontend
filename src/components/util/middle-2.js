import RequestCard from "../friends/request"
import PodCastItem from "../podcast/podcast-item"

const Middle2 = () => {
    const items = [
        { username: "dev demola", friends: 22500 },
        { username: "ademo", friends: 200 },
        { username: "ola dev", friends: 22000000 },
        { username: "Jesus dev", friends: 20000000 },
        { username: "osho dev", friends: 0 },
        { username: "aje dev", friends: 0 }
    ]
    return <div className="w-full px-4 py-2 flex md:flex-row flex-col md:h-3/5 sm:h-middle h-5/6 md:justify-between mr:justify-center mr:items-center justify-evenly">
        <div className="md:w-2/5 mr:w-10/12  w-full shadow-md bg-gray-800 overflow-y-scroll md:h-full md:mb-0 mb-4">
            <div className="w-full text-center py-2 text-gray-300 font-bold mr:text-2xl text-xl">
                Trending Podcasts
            </div>
            <div className="flex flex-col h-auto justify-evenlyw-full ">
                {
                    items.map(el => <PodCastItem key={el.username} Avatar={""} friends={el.friends} username={el.username} />)
                }
            </div>
        </div>
        <div className="md:w-3/5 mr:w-10/12  w-full shadow-md bg-gray-800 overflow-y-scroll md:2/5 h-full md:mb-0 mb-4">
            <div className="w-full text-center md:font-bold md:text-2xl text-gray-300 my-3 mr:text-2xl text-xl font-bold ">Your Pending Requests</div>
            <div className="w-full flex flex-col items-center justify-center">
                <RequestCard />
                <RequestCard />
                <RequestCard />
            </div>
        </div>
    </div>
}
export default Middle2