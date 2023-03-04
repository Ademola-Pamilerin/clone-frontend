'use client'
import NavItem from "./dashboard-nav-item"
import { useContext } from 'react'
import { DashBoardContext } from "@/context/dash"


const DashBoardNavigation = () => {
    const contextVal = useContext(DashBoardContext)
    return (<>
        <ul className="w-full flex justify-center items-center flex-col">
            <NavItem first active={ contextVal.activeField === "Dashboard"} label={"Dashboard"} logo={"😁"} link={"/dashboard"} />
            <NavItem active={contextVal.activeField === "Friend"} label={"Friends"} logo={"😁"} link={"/dashboard"} />
            <NavItem active={contextVal.activeField === "Listen"} label={"Listen"} logo={"😁"} link={"/dashboard"} />
            <NavItem active={contextVal.activeField === "Watch"} label={"Watch"} logo={"😁"} link={"/dashboard"} />
            <NavItem active={contextVal.activeField === "Request"} label={"Request"} logo={"😁"} link={"/dashboard"} />
            <NavItem active={contextVal.activeField=== "Notification"} label={"Notification"} logo={"😁"} link={"/dashboard"} />
            <NavItem active={contextVal.activeField === "Setting"} label={"Setting"} logo={"😁"} link={"/dashboard"} />
            <NavItem active={contextVal.activeField === "Help"} label={"Help"} logo={"😁"} link={"/dashboard"} />
        </ul>
    </>)
}
export default DashBoardNavigation