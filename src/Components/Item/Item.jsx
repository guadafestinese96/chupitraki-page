import { useContext } from "react";
import "./Item.css"
import styled from "styled-components";
import CartContext from "../Contexts/CartContext/CartContext";

const ButtonAddToCart = styled.button`
    background-color: var(--colorSecundario);
    border: 1px solid var(--colorSecundario);
    color: black;
    font-size: 9px;
    padding: 3px;
    margin: 3px;
    border-radius: 5px;
`
const ButtonIsInCart = styled.button`
    background-color: var(--colorPrimario);
    border: 1px solid var(--colorPrimario);
    color: black;
    font-size: 9px;
    padding: 3px;
    margin: 3px;
    border-radius: 5px;
`

export default function Item({ item }) {
    const {cart, addToCart} = useContext(CartContext);
    const itemInCart = cart.find(product=> product.id === item.id)

    return (
        <div className="itemContainer">
            <div className="itemImgContainer"><img className="itemImg" src={item.img} alt={item.modelo} />
            </div>
            <div className="itemDetails">
                <h3 className="itemMarca">{item.marca}</h3>
                <h3 className="itemModelo">{item.modelo}</h3>
                {itemInCart ? <ButtonIsInCart>Añadido</ButtonIsInCart> : <ButtonAddToCart onClick={()=>addToCart(item)}>Añadir al carrito</ButtonAddToCart>
            }
            </div>
        </div>
    )
}