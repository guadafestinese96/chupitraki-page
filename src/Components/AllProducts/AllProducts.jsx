import useBebidas from '../../hooks/useBebidas';
import Item from '../Item/Item';
import allBebidas from '../Item/AllBebidas';
import styled from 'styled-components';


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