import Item from "./Item"
import bebidas from './itemsBebidasVodka';
import { useState } from "react";

export default function ItemList(){

    let [items, setItems] = useState(bebidas);


    return(
        <div className="itemListContainer">
            {items.map((item)=>(
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}