import Item from "./Item"
import bebidasWisky from './ItemsBebidasWisky';
import useBebidas from "../../hooks/useBebidas";

export default function ItemsVodka() {
    useBebidas(bebidasWisky)
    return (
        <div className="itemListContainer">
            {bebidasWisky.map((unWisky) => (
                <Item key={unWisky.id} item={unWisky} />
            ))}
        </div>
    )
}