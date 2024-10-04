import useBebidas from '../../hooks/useBebidas';
import Item from '../Item/Item';
import champagne from '../Item/ItemsBebidasChampagne';
import tequila from '../Item/ItemsBebidasTequila';
import wisky from '../Item/ItemsBebidasWisky';
import vodka from '../Item/itemsBebidasVodka';
import styled from 'styled-components';

const allBebidas = [...tequila, ...wisky, ...champagne, ...vodka];

const ContainerBebidas = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items:center;

`

export default function AllProducts(){
    useBebidas(allBebidas);
    return(
        <ContainerBebidas>
            {allBebidas.map((bebida, index)=>(
                <Item key={index} item={bebida}/>
            ))}
        </ContainerBebidas>
    )
}