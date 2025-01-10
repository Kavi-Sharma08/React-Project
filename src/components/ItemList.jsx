import { useDispatch } from "react-redux";
import { IMG_MENU_ID } from "../utils/constants";
import {addItems} from "../utils/CartSlice"
const ItemList = ({ list }) => {
    const dispatch = useDispatch();
    console.log(list);
    const handleAddItem = (item)=>{
        dispatch(addItems(item));
        console.log(item)

    }


    return (
        <div className="">
            {list.map((item) =>


                <div key={item?.card?.info?.id} className="h-80 border-b-2 border-gray-300">
                    <div className="min-h-40 w-full flex justify-between items-center m-4">
                        <div className="relative top-6">
                            <span className="text-gray-500 font-bold text-xl" >{item?.card?.info?.name}</span>
                            <p className="font-bold">₹{item?.card?.info?.price ? Math.floor(item?.card?.info?.price/100) : Math.floor(item?.card?.info?.defaultPrice / 100)}</p>
                            <span className="text-green-700 font-bold text-sm">⭐{item?.card?.info?.ratings?.
                                aggregatedRating?.rating
                            } </span>
                            <span className="text-sm text-gray-700 font-bold">({item?.card?.info?.ratings?.
                                aggregatedRating?.ratingCountV2
                            })</span>
                            <div className="w-9/12 text-gray-500">
                                <p>{item?.card?.info?.description}</p>
                            </div>


                        </div>

                        <span className="relative top-10 mx-5">
                            <img className="h-40 w-32 object-fill" src={IMG_MENU_ID + item?.card?.info?.imageId} />
                            <button onClick={()=>handleAddItem(item)} className="relative left-1 bottom-10  text-green-500 font-extrabold z-10 bg-white w-20 text-center hover:bg-gray-400 rounded-lg p-2">ADD</button>
                        </span>

                    </div>

                    
                </div>
            )}

        </div>


        // <div key={list?.card?.card?.info?.id}>



        // </div>
    );
}
export default ItemList