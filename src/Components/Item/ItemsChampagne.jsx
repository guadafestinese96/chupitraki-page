import bebidasChampagne from './ItemsBebidasChampagne';
import Item from './Item';
import useBebidas from '../../hooks/useBebidas';

export default function ItemsChampagne(){
    useBebidas(bebidasChampagne);

    return(
        <div className="itemListContainer">
        {bebidasChampagne.map((unChampagne)=>(
            <Item key={unChampagne.id} item={unChampagne}/>
        ))}

    </div>
    )
}