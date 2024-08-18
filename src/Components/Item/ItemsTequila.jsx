import Item from "./Item"
import bebidasTequila from "./ItemsBebidasTequila";
import { useState } from "react";

export default function ItemsTequila(){

    let [tequila, setTequila] = useState(bebidasTequila);

    return(
        <div className="itemListContainer">
            {tequila.map((unTequila)=>(
                <Item key={unTequila.id} item={unTequila}/>
            ))}
        </div>
    )
}