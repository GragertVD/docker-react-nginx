import styled from 'styled-components';


export const Background = styled.div<{ openCard: boolean }>`
  /* background-color: black; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  transition: all 0.35s;
  background-color: rgba(0, 0, 0, ${props => props.openCard ? 0.35 : 0});
  pointer-events: ${props => props.openCard ? 'all' : 'none'};
  /* pointer-events: all; */

`;

export const CardContainer = styled.div<{ openCard: boolean }>`
  background-color: transparent;
  /* background-color: ${props => props.theme.colors.white}; */

  /* max-width: 480px;
  padding: 32px; */

  transition: all 0.35s;
  transform: scale(${props => props.openCard ? 1 : 0});

`;