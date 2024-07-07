import styled from "styled-components";

export const SubtaskItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  input{
    background-color:  ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    color: rgba(00,01,12, 0.25);
    border-radius: 4px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
    &::placeholder{
      color: ${props => props.theme.theme === "light" ? "rgba(00,01,12, 0.25)" : "rgba(ff,ff,ff, 0.25)"} ;
    }
    &:focus{
      outline: none;
      border: 1px solid ${props => props.theme.colors.mainPurple};
    }    
  }
  
  &:not(last-child){
    margin-bottom: 12px;
  }

`;

export const IconCrossContainer = styled.div`
  margin-left: 10px;
  height: 100%;
  padding: 5px;
  cursor: pointer;
`;