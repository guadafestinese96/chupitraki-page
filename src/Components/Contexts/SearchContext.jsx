import { createContext, useState } from "react";
import {  } from "react";

export const SearchContext = createContext({ message: "Hola mundo"})

export function SearchProvider({children}){
    let [search, setSearch] = useState();
    return(
        <SearchContext.Provider value={{search : search, setSearch : setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

//<SearchContext.Provider value={{search : search, setSearch : setSearch}}>
// ES LO MISMO QUE --> <SearchContext.Provider value={{search, setSearch}}> PORQUE TIENEN LA MISMA CLAVE Y VALOR, IGUAL NOMBRE