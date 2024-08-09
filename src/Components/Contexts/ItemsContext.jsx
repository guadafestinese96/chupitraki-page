import { createContext,useContext, useEffect, useState } from "react";
import frameworksList from '../List/items'
import { SearchContext } from "./SearchContext";

export const ItemsContext = createContext([]);

export function ItemsProvider({children}){
    let [items, setItems] = useState(frameworksList);
    let { search } = useContext(SearchContext);

    useEffect(function () {
        if (!search || search === ""){
            setItems(frameworksList);
            return;
        }
        filterItems(search);
    }, [search])

    function filterItems(search) {
        let newItemsFiltered = filterItemsBySearch(search);
        setItems(newItemsFiltered);
    }

    function filterItemsBySearch(search) {
        let filteredItems = frameworksList.map(item => item.toLowerCase().includes(search.toLowerCase()) ? item : null)
        return filteredItems;
    }
    //utilizando esta funcion con map en vez de filter no pierdo los index
        
    return(
        <ItemsContext.Provider value={items}>
            {children}
        </ItemsContext.Provider>
    )
}
