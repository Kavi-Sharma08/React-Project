import { IMG_ID } from "../utils/constants.jsx";
const Card = ({ resData }) => {
    console.log("Card render")
    const {name,  costForTwo, avgRating, cloudinaryImageId  } = resData
    return (
        <div className="min-h-0.5 max-w-72 m-3" >
            
            <div className="border rounded-lg w-full h-full bg-gray-100 hover:bg-gray-200 transition-colors duration-400 hover:shadow-2xl cursor-pointer ">
                <img className=" p-3 aspect-video object-cover" src={IMG_ID + cloudinaryImageId}>
                
                </img>
                
                <div className="font-semibold">
                    
                    <p className="p-2  hover:underline">{name}</p>
                   
                    <p className="p-2  hover:underline">{costForTwo}</p>
                    
                    <p className="p-2  ">⭐{avgRating} </p>

                </div>


            </div>

        </div>


    );
};

export default Card;