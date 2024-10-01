import './Carousel.css'
import styled from 'styled-components';
import wisky from '../Item/ItemsBebidasWisky';
import champagne from '../Item/ItemsBebidasChampagne';
import tequila from '../Item/ItemsBebidasTequila';
import vodka from '../Item/itemsBebidasVodka';
import CarouselItem from './CarouselItem';

const bebidas2 = [...wisky, ...champagne, ...tequila, ...vodka];
const bebidas3 = [...bebidas2, ...bebidas2];


const CarouselContainer = styled.div`
    background-color: rgb(255, 194, 25, 0.7);
    width: 100%;
    height: 220px;
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
const CarouselImg = styled.img`
    height: 160px;
    &:hover{
    height:180px;
    cursor: pointer;
    }
    
`

const DetailsItemh4 = styled.h4`
    font-size:10px;
    text-transform:capitalize;
`

export default function Carousel2() {

    return (
        <CarouselContainer>
            <div className=' overflow-hidden w-full'>
                <div className="flex whitespace-nowrap animate-scroll">
                    {bebidas3.map((bebida, index) => (
                        <CarouselItem item={bebida} key={index}/>
                    ))}
                </div>
            </div>
        </CarouselContainer>
    )
}
/*
<CarouselContainer>
<div className=' overflow-hidden w-full bg-white'>
<div className="flex whitespace-nowrap animate-scroll">
                {bebidas3.map((bebida, index) => (
                    <ImgContainer key={index}>
                        <CarouselImg src={bebida.img} />
                        <DetailsItemh4>{bebida.marca}</DetailsItemh4>
                        <DetailsItemh4>{bebida.modelo}</DetailsItemh4>
                    </ImgContainer>
                ))}
                    </div>
                    </div>
            </CarouselContainer>
            */