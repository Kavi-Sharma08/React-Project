import { MENU } from "./constants";
import { useEffect , useState } from "react";
const useRestaurent = (resid)=>{
    const [resInfo , setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();

    },[])
    
    const fetchMenu = async ()=>{
        const data = await fetch(MENU+resid);
        const json = await data.json();
        setResInfo(json.data);

    };
    return resInfo;

}
export default useRestaurent;