import Shimmer from "./Shimmer.jsx";
import { useParams } from "react-router";
import useRestaurent from "../utils/useRestaurent.jsx";
import { RestaurantChild, WithVeg } from "./RestaurantChild.jsx";
import { useState } from "react";

const RestaurentMenu = () => {
    const { resid } = useParams();
    const resMenuInfo = useRestaurent(resid);
    const [indexShow , setIndexShow] = useState(null);
    if (resMenuInfo === null) return (<Shimmer />)

    const { name, locality, areaName, costForTwoMessage, cuisines, avgRating } = resMenuInfo?.cards[2]?.card?.card?.info;

    const categories = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {

        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    console.log("Categories", categories);
    const RestaurantIsVeg = WithVeg(RestaurantChild)
    return (
        <>
            <div className="flex justify-center text-green-900">
                <h1 className="font-bold text-2xl">{name}</h1>

            </div>
            <div className="flex justify-center m-5">
                <div className="border-4 rounded-2xl border-green-100 w-80 bg-gray-300 shadow-xl p-4 ">
                    <p className="text-orange-500 text-2xl" >{cuisines.join(",")}</p>
                    <p className="font-bold" >{"⭐" + avgRating}</p>
                    <p className="font-bold">{locality}</p>
                    <p className="font-bold inline-block" >Outlet : </p>
                    <p className="font-bold inline-block">{areaName}</p>

                </div>
            </div>
            <h2 className="text-4xl font-extrabold text-orange-900  flex justify-center m-4">Menu</h2>
            <div>

                {categories?.map((category, index) => (
                    <RestaurantChild key={category?.card?.card?.title} data={category?.card?.card}
                    showItems = {index === indexShow && true} setIndexShow ={()=> setIndexShow(index)} />


                ))}
            </div>


        </>
    )
}

export default RestaurentMenu;

