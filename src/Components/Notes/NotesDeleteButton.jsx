
import { NotesContext } from "../Contexts/NotesContext"
import { useContext } from "react";

export default function NoteDeleteButton({id}){
    let {remove} = useContext(NotesContext);
    return(
        <button onClick={ev=> remove(id) }>ELIMINAR</button>
    )
}