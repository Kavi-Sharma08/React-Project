const Contact = ()=>{
    return(
        <>
            <div className="font-bold text-2xl flex justify-center"><h1>Contact Us</h1></div>
            <div className="flex  justify-center">
                <label>Enter Name : </label><input type="text" className="border border-black cursor-text p-3 " />
                <label>Enter Message : </label><input type="text" className="border border-black cursor-text p-3" />
            </div>
        </>
    )
}
export default Contact