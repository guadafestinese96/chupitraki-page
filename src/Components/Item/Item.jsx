import "./Item.css"

export default function Item({ item }) {
    return (
        <div className="itemContainer">
            <div className="itemImgContainer"><img className="itemImg" src={item.img} alt={item.modelo} /></div>
            <p className="itemMarca">{item.marca}</p>
            <p className="itemModelo">{item.modelo}</p>
        </div>
    )
}