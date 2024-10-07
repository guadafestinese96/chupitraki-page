import { useContext } from "react"
import CartContext from "../Contexts/CartContext/CartContext"

export default function Cart(){
    const {cart} = useContext(CartContext);

    return(
        <div className="cartContainer">
            {cart.map(item=>{
                <div className="cartItemContainer">
                    <img src={item.img} alt="img"/>
                    <p>{item.modelo}</p>
                </div>
            })}
        </div>
    )
}