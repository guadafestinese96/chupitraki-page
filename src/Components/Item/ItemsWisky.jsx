import allBebidas from './AllBebidas';
import Item from './Item';
import useBebidas from '../../hooks/useBebidas';

export default function ItemsWisky(){
    useBebidas(allBebidas);
    const bebidasFilter = allBebidas.map(bebida=> {
        if(bebida.tipo === "wisky"){
            return bebida;
        }else{
            return null;
        }
    });

    return(
        <div className="itemListContainer">
        {bebidasFilter.map((bebida)=>(
            bebida!= null && <Item key={bebida.id} item={bebida}/>
        ))}
    </div>
    )
}