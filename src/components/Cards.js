import React, {useContext} from "react";
import styled from "styled-components";
import { AppContext } from "./context/AppContext";




const Cards = () => {
const {Pool} = useContext(AppContext)
  return (
    <SectionRiver>
      <Paragraph>Pula:{Pool}</Paragraph>
      
        <FirstRiver className="River">
        <CartSlot className="DivIMAGE-0"></CartSlot>
        <CartSlot className="DivIMAGE-1"></CartSlot>
        <CartSlot className="DivIMAGE-2"></CartSlot>
        <CartSlot className="DivIMAGE-3"></CartSlot>
        <CartSlot className="DivIMAGE-4"></CartSlot>
        </FirstRiver>
      
      </SectionRiver>
      );
};

export default Cards;
const SectionRiver = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`

const FirstRiver = styled.section`
width:100%;
height:35%;

display:flex;
flex-direction:row-reverse;
@media(min-width:500px){
width:50%;
};
@media(min-width:1000px){
width:40%;
};
@media(min-width:1200px){
width:30%;
};


`;

const Paragraph = styled.p`
align-self:flex-start;
font-size:1.4rem;
margin-bottom:.9rem;
`

const CartSlot = styled.div`
width:100%;
align-self:center;
@media(min-width:500px){
width:80%;
}
@media(min-width:1000px){
width:50%;
}
@media(min-width:1200px){
width:30%;
}
`
