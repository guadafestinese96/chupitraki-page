import { useState } from "react";


export default function useBebidas(bebidas){

    let [products, setProducts] = useState(bebidas);

    return(
        {products}
    )
}