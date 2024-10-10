import useCount from "../../hooks/useCount";
import styled from "styled-components";
import { useContext } from "react";
import CartContext from "../Contexts/CartContext/CartContext";

const CartImgItem = styled.img`
height: 100px;
`

const CartItemContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: var(--colorSecundario);
margin: 5px;
padding: 5px;
border-radius: 5px;
width: 185px;
text-align:center;
font-weight: bold;

`
const CartDetailsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 12px;
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

const Buttons = styled.button`
background-color: var(--colorPrimario);
color: black;
border: 1px solid black;
margin: 3px;
padding: 0px 5px 0px 5px;
border-radius: 10px;
`

export default function CartItem({ item }) {
    const { add, removeOne, count } = useCount(item);
    const {cart, removeFromCart} = useContext(CartContext);

    return (
        <CartItemContainer>
            <CartImgItem src={item.img} alt="img" />
            <CartDetailsContainer>
                <p>{item.marca}</p>
                <p>{item.modelo}</p>
                <div>
                    <Buttons onClick={removeOne} disabled={count===1}>-</Buttons>
                    <span>{item.quantity}</span>
                    <Buttons onClick={add}>+</Buttons>
                </div>

                <DeleteButton onClick={() => removeFromCart(item)}>Eliminar</DeleteButton>
            </CartDetailsContainer>
        </CartItemContainer>
    )
}