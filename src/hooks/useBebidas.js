import { useState } from "react";
import Item from "../Components/Item/Item";

export default function useBebidas(bebidas){

    let [products, setProducts] = useState(bebidas);

    return(
        {products}
    )
}