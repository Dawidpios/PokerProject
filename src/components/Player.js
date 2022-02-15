import React, { useContext} from 'react';
import styled from "styled-components"
import { AppContext } from "./context/AppContext";



const Player = () => {
    const {cash,check,check2,check3, ImagesPlayer, BtnDisabled1,BtnDisabled2,BtnDisabled3, Pool, Surrender, SurrenderBtnDisabled} = useContext(AppContext);
    
    return ( <PlayerSection>
        <Paragraph>Żetony:{cash}</Paragraph>
        <CardsSection>
            <Div><IMG src={ImagesPlayer?.[0]}></IMG></Div>
            <Div><IMG src={ImagesPlayer?.[1]}></IMG></Div>
        
        </CardsSection>
       
    <PlayerButtons className="PlayerButtons">
        <Button disabled={SurrenderBtnDisabled} id="Surrender"  onClick={Surrender}>Pasuje</Button>
        <Button  disabled={BtnDisabled1} onClick={check}>Sprawdzam {Pool * 0.5}</Button>
        <Button  disabled={BtnDisabled2} onClick={check2}>Sprawdzam kolejną karte {Pool*0.5}</Button>
        <Button disabled={BtnDisabled3} onClick={check3}>Karta stół {Pool * 0.5}</Button>    
    </PlayerButtons>
    </PlayerSection> );
}
 
export default Player;

const PlayerSection = styled.section`
width:100%;
height:100%;
display:flex;
/* flex-direction:column; */
align-items:flex-start;
justify-content:center;
position:relative;

`


const PlayerButtons = styled.section`
position:absolute;
bottom:0;
width:100%;
height: 25%;
display: flex;


`

const Div = styled.div`
width:40%;
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
`

const IMG = styled.img`
width:100%;
`

const CardsSection = styled.section`
position:absolute;
bottom:85%;
left:50%;
transform: translateX(-50%);
display:flex;
width:40%;
height:25%;
margin-top:10%;
@media(min-width:500px){
    left:65%;
}


`

const Paragraph = styled.p`
position:absolute;
left:0;
font-size:1.4rem;
margin:.4rem;

`

const Button = styled.button`
width:60%;
height: 100%;
align-self:center;
font-size:.8rem;
text-transform:uppercase;
background-color: hsla(345, 100%, 30%);
font-weight:bold;
color:hsla(0, 78%, 93%);
&:disabled{
background-color: hsla(345, 80%, 49%, .3);
}
@media(min-width:500px){
font-size:1rem;
};
@media(min-width:800px){
font-size:1.2rem;
};
@media(min-width:1000px){
font-size:1.4rem;
};
@media(min-width:1200px){
font-size:1.5rem;
};
`