import React, { useState } from "react";
import styled from "styled-components";
import tlo from "./images/tlo.jpg";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import Player from "./components/Player";
import SiPlayer from "./components/SiPlayer";
import AppProvider from "./components/context/AppContext";

function App() {
  return (
    <AppProvider>
    <Table>
      <MenuAndSiStyle>
        <Menu></Menu>
        <SiPlayer></SiPlayer>
      </MenuAndSiStyle>
      <CardsStyle>
        <Cards></Cards>
      </CardsStyle>
      <PlayerStyle>
        <Player></Player>
      </PlayerStyle>
    </Table>
    </AppProvider>
  );
}

export default App;

const Table = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right bottom,
      rgba(000, 000, 000, 0.7),
      rgba(000, 000, 255, 0.3)
    ),url(${tlo});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction:column;
  font-size:4rem;
`;
const PlayerStyle = styled.section`
width:100%;
height: 25%;

`;

const MenuAndSiStyle = styled.section`
width:100%;
height: 25%;
display: flex;
flex-direction:column;
/* flex-direction:row-reverse; */
`;
const CardsStyle = styled.section`
width:100%;
height: 50%;

`;

