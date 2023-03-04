import DashBoardLayoutHeading from "@/components/header/dashboard-layer"
import DashBoardContextProvider from "@/context/dash"
const DashBoardLayout = ({ children }) => {
    return <div>
        <DashBoardContextProvider>
            <DashBoardLayoutHeading>
                {children}
            </DashBoardLayoutHeading>
        </DashBoardContextProvider>
    </div>
}

export default DashBoardLayout