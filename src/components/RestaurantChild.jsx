import { useState } from "react";
import ItemList from "./ItemList";
export const RestaurantChild = ({ data , showItems , setIndexShow}) => {
    const handleChange = ()=>{
        console.log(setIndexShow);
        
        setIndexShow();
    }
    return (
        <>
            <div className="w-6/12 bg-gray-100 shadow-lg p-2 mx-auto my-4 " onClick={handleChange}>
                <div   className="flex justify-between cursor-pointer ">
                    <span className="font-bold text-lg ">{data.title}({data.itemCards.length})</span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span>
                </div>
                {showItems && <ItemList list={data.itemCards} />}

            </div>

        </>
    )

}
export const WithVeg = (RestaurantChild) => {
    return (props) => {

        return (
            <div>
                <label className="absolute bg-red-800 text-white font-bold rounded-full p-2  ">Veg</label>
                <RestaurantChild {...props} />
            </div>

        )
    }
}
