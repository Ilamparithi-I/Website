// pages/index.js
import React from 'react';
import CharacterSprite from '../components/Character';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/TilesetFloor.png');
  background-size: 64px 64px;
  background-repeat: repeat;
`;

const Home = () => {
  return (
    <Container>
      <CharacterSprite />
    </Container>
  );
};

export default Home;