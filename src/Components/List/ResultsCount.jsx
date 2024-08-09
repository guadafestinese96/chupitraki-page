import { useContext } from "react";
import { ItemsContext } from "../Contexts/ItemsContext";
import { SearchContext } from "../Contexts/SearchContext";

export default function ResultsCount(){
    const elements = useContext(ItemsContext);
    const {search} = useContext(SearchContext);

    return(
        <p>Se encontraron {elements.filter(el=> el != null).length} items para la busqueda de '{search}'</p>
    )
}