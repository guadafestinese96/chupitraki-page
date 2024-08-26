import Item from "./Item"
import bebidasVodka from './itemsBebidasVodka';
import useBebidas from "../../hooks/useBebidas";

export default function ItemsVodka() {
    useBebidas(bebidasVodka);
    return (
        <div className="itemListContainer vodkaContainer">
            {bebidasVodka.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    )
}