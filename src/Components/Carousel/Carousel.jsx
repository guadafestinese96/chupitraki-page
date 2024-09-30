import { useState } from "react";
import claseAzulImg from '../../../public/claseAzul.png';
import belvedereImg from '../../../public/belvedere.png';
import richImg from '../../../public/rich.png';
import './Carousel.css'
import styled from 'styled-components';

const CarouselImg = styled.img`
    height: 200px;
    opacity: 0;
    transition: 1s;
    &.loaded{
        opacity: 1;
    }
`

const CarouselButton = styled.button`
    background-color: rgb(0,0,0,0.5);
    color: var(--colorSecundario);
    height: 30px;
    border-radius: 5px;
    padding: 3px;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px solid var(--colorSecundario);
`

export default function Carousel() {
    const images = [claseAzulImg, belvedereImg, richImg];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    const selectNewImage = (selectedIndex, images, next = true) => {
        setLoaded(false)

        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1)
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex)
        }, 500)


    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false)
        // const condition = selectedIndex > 0;
        // const nextIndex = condition ? selectedIndex-1 : images.length -1;
        // setSelectedImage(images[nextIndex]);
        // setSelectedIndex(nextIndex)
    }

    const next = () => {
        selectNewImage(selectedIndex, images)
        // const condition = selectedIndex < images.length -1;
        // const nextIndex = condition ? selectedIndex +1 : 0;
        // setSelectedImage(images[nextIndex]);
        // setSelectedIndex(nextIndex)
    }

    return (
        <div className="carouselContainer">
            <CarouselButton onClick={previous}>{"<"}</CarouselButton>
            <CarouselImg src={selectedImage} alt="." className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />
            <CarouselButton onClick={next}>{">"}</CarouselButton>
        </div>
    )
}