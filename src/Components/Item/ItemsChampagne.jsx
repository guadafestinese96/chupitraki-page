import bebidasChampagne from './ItemsBebidasChampagne';
import Item from './Item';
import { useContext, useState } from 'react';
import { SearchContext, SearchProvider } from '../Contexts/SearchContext';


export default function ItemsChampagne(){
    const [champagne, setChampagne] = useState(bebidasChampagne);
    const {search} = useContext(SearchContext);

    return(
        <div className="itemListContainer">
        {champagne.map((unChampagne)=>(
            <Item key={unChampagne.id} item={unChampagne}/>
        ))}

    </div>
    )
}