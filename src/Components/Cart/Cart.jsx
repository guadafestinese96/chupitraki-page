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
        <CartContainer>
            {cart.map((item, index)=>(
            <CartItem item={item} key={index}/> ))
        }
        </CartContainer>
    )
}