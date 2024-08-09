import Item from "./Item"
import bebidasWisky from './ItemsBebidasWisky';
import { useState } from "react";

export default function ItemsVodka(){

    let [wisky, setWisky] = useState(bebidasWisky);

    return(
        <div className="itemListContainer">
            {wisky.map((unWisky)=>(
                <Item key={unWisky.id} item={unWisky}/>
            ))}
        </div>
    )
}