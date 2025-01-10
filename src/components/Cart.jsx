import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch  = useDispatch();
    const HandleClearCart = ()=>{
        dispatch(clearCart())
    }
    return (
        <>
            <div className="text-center">
                <h1 className="font-bold text-2xl">Cart</h1>
            </div>
            <div className="flex justify-center my-3">
                <button onClick={HandleClearCart} className="border border-gray-600 bg-black text-white p-3 text-center cursor-pointer rounded-lg">Clear Cart</button>
            </div>
            <div className="w-6/12 mx-auto">
                <ItemList list = {cartItems}/>
            </div>

        </>
    )
}
export default Cart;