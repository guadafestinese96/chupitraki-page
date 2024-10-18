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


    return(
        <div className="flex flex-col justify-center items-center">
        <CartContainer>
            {cart.map((item, index)=>(
            <CartItem item={item} key={index}/> ))
        }
        </CartContainer>
        {cart.length>0 && <button className="bg-black text-white text-center w-[150px] rounded text-xs p-1">Finalizar Compra</button>
        }
        </div>
    )
}