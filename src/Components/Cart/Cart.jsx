import { useContext } from "react"
import CartContext from "../Contexts/CartContext/CartContext"
import styled from "styled-components";

const CartImgItem = styled.img`
height: 100px;
`

const CartContainer = styled.div`
display:flex;
text-transform: capitalize;
flex-wrap: wrap;

`
const CartItemContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: var(--colorSecundario);
margin: 5px;
padding: 5px;
border-radius: 5px;
width: 175px;
`
const CartDetailsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 13px;
`

const DeleteButton = styled.button`
border-radius: 5px;
border: 1px solid black;
padding: 2px;
background-color: black;
color: var(--colorSecundario);
&:hover{
background-color: var(--colorSecundario);
color: black;
}
`
export default function Cart(){
    const {cart, removeFromCart} = useContext(CartContext);
    console.log(cart);
    
    return(
        <CartContainer>
            {cart.map(item=>(
                <CartItemContainer>
                    <CartImgItem src={item.img} alt="img"/>
                    <CartDetailsContainer>
                    <p>{item.marca}</p>
                    <p>{item.modelo}</p>
                    <p>{item.quantity}</p>
                    <DeleteButton onClick={()=>removeFromCart(item)}>Eliminar</DeleteButton>
                    </CartDetailsContainer>
                    </CartItemContainer>
            ))}
        </CartContainer>
    )
}