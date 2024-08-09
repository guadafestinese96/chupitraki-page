import { useContext } from "react"
import InputSearch from "../InputSearch/InputSearch"
import { ItemsContext } from "../Contexts/ItemsContext"
import ResultsCount from "./ResultsCount";

export default function ListContainer(){
    let elements = useContext(ItemsContext);
    return(
        <div>
            <InputSearch/>
            <ResultsCount/>
            <ul>
            {elements.map((element, index)=> (element != null) && (<li key={index}>{element}</li>))}
            </ul>
        </div>
    )
}

//debo poner una key a cada li