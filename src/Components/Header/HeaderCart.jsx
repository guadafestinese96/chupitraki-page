import cartImg from '../../../public/cart1.png'
import styled from 'styled-components'
import { useContext } from 'react'
import CartContext from '../Contexts/CartContext/CartContext'
import { NavLink } from 'react-router-dom'


const CartImg = styled.img`
    width: 35px;
`
const SpanCart = styled.span`
    font-size: 10px;
    color: var(--colorPrimario);
    background-color: black;
    padding: 2px 5px 2px 5px;
    border: 1px solid var(--colorSecundario);
    border-radius: 50%;
`

export default function HeaderCart() {
    const { cart } = useContext(CartContext);
    console.log(cart);

    return (
        <div>
            <NavLink to='/cart'>
                <CartImg src={cartImg} alt="cartImg" />
                <SpanCart>{cart.length}</SpanCart>
            </NavLink>
        </div>
    )
}