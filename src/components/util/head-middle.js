import MinCard from "./dash-min-card"

const HeadMiddle = () => {
    return (<div className="flex flex-row w-full py-5 px-6 md:justify-between justify-evenly">
        <MinCard label={"Create Podcast"} logo={"😁"} />
        <MinCard label={"Go Live"} logo={"😁"} />
        <MinCard label={"Group Call"} logo={"😁"} />
        <MinCard label={"Friend Requests"} logo={"😁"} />
    </div>)
}
export default HeadMiddle