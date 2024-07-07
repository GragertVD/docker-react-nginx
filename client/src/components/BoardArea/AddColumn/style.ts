import styled from 'styled-components';


export const AddColumnContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.theme === "light" ? "linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)" :"linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%)"};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 1s, color 1s;

  button{
    ${props => props.theme.fonts.heading_XL};
    color: ${props => props.theme.colors.mediumGrey}; 
    border: none;
    background: transparent;
    width: 100%;
    text-align: center;
    padding: 100% 0;
    cursor: pointer;
  }

`;