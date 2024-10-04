import "./Item.css"
import styled from "styled-components";

const ButtonAddToCart = styled.button`
    background-color: var(--colorSecundario);
    border: 1px solid var(--colorSecundario);
    color: black;
    font-size: 9px;
    padding: 3px;
    margin: 3px;
    border-radius: 5px;
`

export default function Item({ item }) {
    return (
        <div className="itemContainer">
            <div className="itemImgContainer"><img className="itemImg" src={item.img} alt={item.modelo} />
            </div>
            <div className="itemDetails">
                <h3 className="itemMarca">{item.marca}</h3>
                <h3 className="itemModelo">{item.modelo}</h3>
                <ButtonAddToCart>Añadir al carrito</ButtonAddToCart>
            </div>
        </div>
    )
}