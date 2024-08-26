import Item from "./Item"
import bebidasTequila from "./ItemsBebidasTequila";
import useBebidas from "../../hooks/useBebidas";

export default function ItemsTequila(){
    useBebidas(bebidasTequila);
    return(
             <div className="itemListContainer">
                 {bebidasTequila.map((unProducto)=>(
                     <Item key={unProducto.id} item={unProducto}/>
                 ))}
             </div>
)
} 

