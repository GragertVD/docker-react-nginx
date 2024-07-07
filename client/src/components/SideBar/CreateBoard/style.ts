import styled from 'styled-components';

export const NewTaskContainerForm = styled.form`
  width: 480px;
  max-height: 85vh;  
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
  border-radius: 5px;
  padding: 32px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  /* margin-top: 60px; */
  /* transition: all 0.3s; */
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.mainPurpleHover};
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.mediumGrey};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar-corner {
    background-color: ${props => props.theme.colors.mediumGrey};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 20px;
    
  }
  & {
    -ms-overflow-style: auto;
    scrollbar-color: ${props => props.theme.colors.mainPurpleHover} ${props => props.theme.colors.mediumGrey};
    scrollbar-width: thin;
  }
    
  max-width: 90%;
  ${props => props.theme.beforeMobileL}{
    padding: 18px;
  }
`;

export const TitleNewTask = styled.h3`
  width: 100%;
  ${props => props.theme.fonts.heading_L};
  color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
`;

export const InputTitleContainer = styled.div`
  width: 100%;
  p{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    color: ${props => props.theme.theme === "light" ? props.theme.colors.mediumGrey : props.theme.colors.white};
    margin-bottom: 8px;
  }
  
  input{
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    ${props => props.theme.fonts.body_L};
    border-radius: 4px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
    color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
    &::placeholder{
      color: ${props => props.theme.theme === "light" ? "rgba(00,01,12, 0.25)" : "rgba(ff,ff,ff, 0.25)"};
    }
    &:focus{
      outline: none;
      border: 1px solid ${props => props.theme.colors.mainPurple};
    }
  }
`;

export const InputDescriptionContainer = styled.div`
  width: 100%;
  p{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    color: ${props => props.theme.theme === "light" ? props.theme.colors.mediumGrey : props.theme.colors.white};
    margin-bottom: 8px;
  }
  
  textarea{
    resize: none;
    width: 100%;
    max-height: 120px;
    padding: 8px 16px;
    ${props => props.theme.fonts.body_L};
    border-radius: 4px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
    color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
    &::placeholder{
      color: ${props => props.theme.theme === "light" ? "rgba(00,01,12, 0.25)" : "rgba(ff,ff,ff, 0.25)"};
    }

    &:focus{
      outline: none;
      border: 1px solid ${props => props.theme.colors.mainPurple};
    }
  }
`;


export const Background = styled.div`
  /* background-color: black; */
  position: fixed;
  z-index: 10;
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
  
  padding: 30px 0;
  
  overflow-y: auto;
    &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.mainPurpleHover};
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.mediumGrey};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar-corner {
    background-color: ${props => props.theme.colors.mediumGrey};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 20px;
    
  }
  & {
    -ms-overflow-style: auto;
    scrollbar-color: ${props => props.theme.colors.mainPurpleHover} ${props => props.theme.colors.mediumGrey};
    scrollbar-width: thin;
  }

`;
