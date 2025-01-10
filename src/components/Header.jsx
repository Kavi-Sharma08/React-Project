import { COMPANY_LOGO } from "../utils/constants";
import { useState, useEffect , useContext} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";


const Header = () => {
    const onlineStatus = useOnlineStatus();
    let [login, setLogin] = useState("Login");
    const {loggedInUser , setUserName} = useContext(Usercontext);
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    
    return (
        <>
            <div className=" flex justify-center items-center ">
                <div className="w-44 h-32 px-7 py-3">
                    <img className="logo" src={COMPANY_LOGO} />
                </div>
                
                <div className="flex items-center" >
                    <ul className="flex space-x-5 p-4 items-center">
                        <li className=" px-4">Online Status : {
                            onlineStatus ? "✅" : "❌"
                        }

                        </li>

                        <li className="hover:underline decoration-2 hover:text-orange-500 px-4 transition duration-400  "><Link to="/">Home</Link></li>
                        <li className="hover:underline decoration-2 px-4 hover:text-orange-500  transition duration-400"><Link to="/contact">Contact us</Link></li>
                        <li className="hover:underline decoration-2 px-4 hover:text-orange-500 transition duration-400"><Link to="/about">About us</Link></li>
                        <li className="hover:underline decoration-2 px-4 hover:text-orange-500 transition duration-400">
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <li className="hover:underline decoration-2 px-4 hover:text-orange-500 transition duration-400"><Link to={'/cart'}>Cart - ({cartItems.length} items)</Link></li>
                        <li>{loggedInUser}</li>


                        <button className="border-2 bg-yellow-700 p-2 text-white " onClick={() => {
                            login === "Login" ? setLogin("Logout") : setLogin("Login")
                        }}>{login}</button>
                        
                    </ul>
                </div>


            </div>


        </>



    );
};

export default Header;