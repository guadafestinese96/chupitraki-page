import { useContext } from "react"
import { SearchContext } from "../Contexts/SearchContext";

export default function InputSearch({}){
    const {setSearch} = useContext(SearchContext);

    return(
        <input type="text" onChange={(ev => setSearch(ev.target.value))}/>
    )
}