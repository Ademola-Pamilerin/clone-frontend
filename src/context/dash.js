"use client"
import React, { useState } from 'react'
export const DashBoardContext = React.createContext({
    activeField: "Dashboard",
    setActiveField: () => { }
})

const DashBoardContextProvider = props => {

    const [activeFieldVal, setActiveValField] = useState("Dashboard")

    const setActiveFieldHandler = (value) => {
        setActiveFieldHandler(value)
    }

    return <DashBoardContext.Provider value={{ setActiveField: setActiveFieldHandler, activeField: activeFieldVal }}>
        {props.children}
    </DashBoardContext.Provider>
}
export default DashBoardContextProvider