import { useContext } from "react"
import CartContext from "../Contexts/CartContext/CartContext"
import styled from "styled-components";
import CartItem from "./CartItem";


const CartContainer = styled.div`
display:flex;
text-transform: capitalize;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

export default function Cart(){
    const {cart} = useContext(CartContext);

    // const cartTotal = cart.reduce((acc, item)=>{
    //     return item.quantity*item.precio
    // },0)

    return(
        <div className="flex flex-col justify-center items-center">
        <CartContainer>
            {cart.map((item, index)=>(
            <CartItem item={item} key={index}/> ))
        }
        </CartContainer>
        <p className="bg-black text-white text-center w-[150px]">Total: $</p>
        </div>
    )
}