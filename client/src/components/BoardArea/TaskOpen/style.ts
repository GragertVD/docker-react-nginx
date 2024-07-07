import styled from 'styled-components';

export const TaskOpenContainer = styled.div`
  width: 480px;
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
  border-radius: 5px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  max-width: 90%;
  ${props => props.theme.beforeMobileL}{
    padding: 18px;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    ${props => props.theme.fonts.heading_L};
    color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
    margin-right: 24px;
  }
  img{
    flex: 0 1 45px;
    /* width: 45px; */
    padding: 0 20px;
    cursor: pointer;
  }
`;

export const Description = styled.div`
  width: 100%;
  ${props => props.theme.fonts.body_L};
  color: ${props => props.theme.colors.mediumGrey};
`;

export const Background = styled.div`
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
  background-color: rgba(0, 0, 0,  0.35);
  pointer-events: all;

`;
