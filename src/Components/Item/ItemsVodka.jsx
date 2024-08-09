import Item from "./Item"
import bebidasVodka from './itemsBebidasVodka';
import { useState } from "react";

export default function ItemsVodka(){

    let [items, setItems] = useState(bebidasVodka);

    return(
        <div className="itemListContainer vodkaContainer">
            {items.map((item)=>(
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}