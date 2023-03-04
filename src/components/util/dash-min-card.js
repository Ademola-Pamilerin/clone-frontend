const MinCard = ({ logo, label }) => {
    return <div className="shadow-md lg:w-3/6 md:w-40 w-3/12 justify-center flex lg:flex-row flex-col h-14 items-center shadow-gray-800 bg-gray-800 mr-2">
        <span className="block lg:w-auto md:w-1/3 w-full text-center">
            {logo}
        </span>
        <span className="block lg:w-auto md:w-full w-full md:text-lg text-xs md:text-center text-center text-gray-300 md:font-bold font-semibold">
            {label}
        </span>
    </div>
}
export default MinCard