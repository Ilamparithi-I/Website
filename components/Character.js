import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const moveUpAnimation = keyframes`
  0% { background-position: -64px 0; }
  100% { background-position: -64px -256px; }
`;

const moveDownAnimation = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 -256px; }
`;

const moveLeftAnimation = keyframes`
  0% { background-position: -128px 0; }
  100% { background-position: -128px -256px; }
`;

const moveRightAnimation = keyframes`
  0% { background-position: -192px 0; }
  100% { background-position: -192px -256px; }
`;

const Character = styled.div`
  width: 64px;
  height: 64px;
  background: url('/Walk.png');
  background-position: 0 0;
  background-size: 256px 256px; /* Adjusted size for 4x4 sprite sheet */
  position: absolute;
  ${(props) =>
    props.isMovingUp &&
    css`
      animation: ${moveUpAnimation} 1s steps(4) infinite;
    `}
  ${(props) =>
    props.isMovingDown &&
    css`
      animation: ${moveDownAnimation} 1s steps(4) infinite;
    `}
  ${(props) =>
    props.isMovingLeft &&
    css`
      animation: ${moveLeftAnimation} 1s steps(4) infinite;
    `}
  ${(props) =>
    props.isMovingRight &&
    css`
      animation: ${moveRightAnimation} 1s steps(4) infinite;
    `}
`;

const CharacterSprite = () => {
  const [direction, setDirection] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setDirection('up');
          break;
        case 'ArrowDown':
          setDirection('down');
          break;
        case 'ArrowLeft':
          setDirection('left');
          break;
        case 'ArrowRight':
          setDirection('right');
          break;
        default:
          break;
      }
    };

    const handleKeyUp = () => {
      setDirection('');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <Character
      isMovingUp={direction === 'up'}
      isMovingDown={direction === 'down'}
      isMovingLeft={direction === 'left'}
      isMovingRight={direction === 'right'}
      // style={top: `${position.x}`}
    />
  );
};

export default CharacterSprite;
