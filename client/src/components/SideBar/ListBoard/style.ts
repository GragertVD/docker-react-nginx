import styled from 'styled-components';


export const ListBoardContainer = styled.ul`

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
  margin-bottom: 10px;
  margin-left: -30px;
  padding-left: 30px;
  ${props => props.theme.beforeTablet}{
    margin-left: -22px;
    padding-left: 22px;
  }
`;