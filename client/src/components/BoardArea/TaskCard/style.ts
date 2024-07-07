import styled from 'styled-components';

export const TaskCardContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  padding: 23px 16px;
  cursor: pointer;
  transition: background-color 1s, color 1s, transform 0.3s;
  
  @media (any-hover: hover) {
    &:hover{
      transform: scale(1.03);
    }
  }

  h5{
    transition: background-color 1s, color 1s;
    ${props => props.theme.fonts.heading_M};
    color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
    margin-bottom: 8px;
  }

  p{
    transition: background-color 1s, color 1s;
    ${props => props.theme.fonts.body_M};
    color: ${props => props.theme.colors.mediumGrey};
  }

`;
