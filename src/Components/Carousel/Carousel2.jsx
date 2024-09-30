import './Carousel.css'
import styled from 'styled-components';
import wisky from '../Item/ItemsBebidasWisky';
import champagne from '../Item/ItemsBebidasChampagne';
import tequila from '../Item/ItemsBebidasTequila';
import vodka from '../Item/itemsBebidasVodka';

const bebidas2= [...wisky, ...champagne, ...tequila, ...vodka];

const CarouselImg = styled.img`
    height: 160px;
    &:hover{
    height:180px;
    cursor: pointer;
    }
    
`
const CarouselContainer = styled.div`
    background-color: rgb(255, 194, 25, 0.7);
    width: 100%;
    height: 230px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

const ImgContainer = styled.div`
    width: 180px;
    height: 180px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`


export default function Carousel2() {
    
    return (
        <div className='overflow-hidden w-full'>
        <CarouselContainer className='animate-scroll'>
            {bebidas2.map(bebida => (
                <ImgContainer>
                    <CarouselImg src={bebida.img} />
                    <p>{bebida.modelo}</p>
                </ImgContainer>
            ))}
        </CarouselContainer>
        </div>
    )
}