import {useState , useEffect} from "react";
const useCard = ()=>{
    console.log("UseCard render");
    
    const [list , setList] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    console.log(list);
    return list;

}
export default useCard;