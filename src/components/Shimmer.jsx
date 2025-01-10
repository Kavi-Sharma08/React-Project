const Shimmer = () => {
    console.log("Shimmer render")
    return (
        <>
            <div className="w-full h-36 flex justify-center space-x-44  relative top-16  ">
                <span className=" bg-gray-200 h-24 w-24 rounded-full"></span>
                <span className=" bg-gray-200 h-24 w-24 rounded-full"></span>
                <span className=" bg-gray-200 h-24 w-24 rounded-full"></span>
                <span className=" bg-gray-200 h-24 w-24 rounded-full"></span>
                <span className=" bg-gray-200 h-24 w-24 rounded-full"></span>
                
                
            </div>
            <div className="flex relative top-16 mx-36 my-12">
                <button className="h-10 w-48 bg-gray-200 mx-4"></button>
                <button className="h-10 w-48 bg-gray-200 mx-4"></button>
                <button className="h-10 w-48 bg-gray-200 mx-4"></button>
            </div>
            <div className=" flex flex-wrap justify-between mx-36 relative top-16">
                <div className="h-56 w-52 bg-gray-200 mx-4 my-4"></div>
                <div className="h-56 w-52 bg-gray-200"></div>
                <div className="h-56 w-52 bg-gray-200"></div>
                <div className="h-56 w-52 bg-gray-200"></div>
                <div className="h-56 w-52 bg-gray-200"></div>
                <div className="h-56 w-52 bg-gray-200"></div>
                <div className="h-56 w-52 bg-gray-200"></div>
                <div className="h-56 w-52 bg-gray-200"></div>
                <div className="h-56 w-52 bg-gray-200"></div>
                <div className="h-56 w-52 bg-gray-200"></div>
                

            </div>

        </>
    )

}
export default Shimmer;