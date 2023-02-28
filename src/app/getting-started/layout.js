import Header from "@/components/header/header"

const GettingStartedLayout = ({ children }) => {
    return (<>
        <div className="bg-gray-100 h-auto">
            <div className="h-header">
                <Header active={"features"} />
            </div>
            {children}
        </div>
    </>)
}
export default GettingStartedLayout