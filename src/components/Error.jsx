import { useRouteError } from "react-router"

const Error = ()=>{
    console.log("Error component render");
    
    const error = useRouteError();
    return (
        <>
            <h1>OOPs Something went wrong</h1>
            <h1>{error.status} {error.statusText}</h1>
        </>
        
    )
}
export default Error