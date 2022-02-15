import React, {useContext } from "react";
import styled from "styled-components"
import { AppContext } from "./context/AppContext";

const Menu = () => {

  const { newGame, DrawCards, winner,DrawCardsButtonDisabled } = useContext(AppContext);
  return (
    <MenuSection>
    
        <Button onClick={newGame}>Nowa gra</Button>
        <Button disabled={DrawCardsButtonDisabled}id="DrawCards" onClick={DrawCards}>Nowe rozdanie</Button>
        <Paragraph>Wynik rozdania: {winner && winner}</Paragraph>
      
    </MenuSection>
  );
};

export default Menu;

const MenuSection = styled.section`
position:relative;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-items:center;
align-items:center;


`
const Button = styled.button`
width:55%;

margin:.3rem;
align-self:center;
font-size:1.2rem;
text-transform:uppercase;
text-align:center;
background-color: hsla(345, 100%, 30%);
font-weight:bold;
color:hsla(0, 78%, 93%);

&:disabled{
  background-color: hsla(345, 80%, 49%, .4);
}
@media(min-width:500px){
  width:30%;
}
@media(min-width:800px){
  width:25%;
}
@media(min-width:1000px){
  width:20%;
}
@media(min-width:1200px){
  width:15%;
}
`

const Paragraph = styled.p`
width:100%;
height:30%;
font-size:1.2rem;
height:50%;
text-transform:uppercase;
font-weight:bold;
align-self:flex-start;

`