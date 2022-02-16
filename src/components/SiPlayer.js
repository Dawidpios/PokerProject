import React, {useContext} from 'react';
import { AppContext } from "./context/AppContext";
import styled from "styled-components"


const SiPlayer = () => {
    const {cashSi, SiCard, ImagesSi,SiResult} = useContext(AppContext);
    return ( 
        <SiSection>
      
        <Paragraph>Żetony:{cashSi}</Paragraph>
        <CardsSection>
        <CardSlot className='SiCardsDiv'><IMG src={ImagesSi?.[0]}></IMG></CardSlot>
        <CardSlot className='SiCardsDiv'><IMG src={ImagesSi?.[1]}></IMG></CardSlot>
        </CardsSection>
     
    </SiSection> );
}
 
export default SiPlayer;
const SiSection = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-items:center;
align-items:flex-start;
position:relative;
`

const CardSlot = styled.div`
width:40%;
opacity:0;
@media(min-width:500px){
width:25%;
};
@media(min-width:800px){
width:20%;
};
@media(min-width:1000px){
width:15%;
};
@media(min-width:1200px){
width:14%;
};
}
`

const CardsSection = styled.section`
position:absolute;
width:40%;
height:15%;
bottom:0;
left:50%;
transform:translateX(-50%);
display:flex;
align-items:center;
@media(min-width:500px){
    left:65%;
}

`
const IMG = styled.img`
width:100%;
`
const Paragraph = styled.p`
font-size:1.4rem;
margin:.4rem;`
