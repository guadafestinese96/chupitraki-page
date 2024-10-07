import { useContext } from "react"
import CartContext from "../Contexts/CartContext/CartContext"
import styled from "styled-components";

const CartImgItem = styled.img`
width: 50px;
`

const CartContainer = styled.div`
display:flex;
background-color: var(--colorSecundario);
`

export default function Cart(){
    const {cart, removeFromCart} = useContext(CartContext);
    console.log(cart);
    
    return(
        <CartContainer>

            {cart.map(item=>(
                <div className="cartItemContainer">
                    <CartImgItem src={item.img} alt="img"/>
                    <p>{item.modelo}</p>
                    <p>{item.quantity}</p>
                    <button onClick={()=>removeFromCart(item)}>Eliminar</button>
                </div>
            ))}
        </CartContainer>
    )
}