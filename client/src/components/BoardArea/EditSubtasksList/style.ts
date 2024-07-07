import styled from 'styled-components';

export const SubtasksContainer = styled.div`
  width: 100%;
  ${props => props.theme.fonts.body_M};
  color: ${props => props.theme.colors.mediumGrey};
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  p{
    color: ${props => props.theme.theme === "light" ? props.theme.colors.mediumGrey : props.theme.colors.white};
    margin-bottom: 8px;
  }
`;

export const SubtasksListContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  max-height: 20vh;
  padding-right: 5px;

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

