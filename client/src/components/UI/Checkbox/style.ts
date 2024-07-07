import styled from 'styled-components';
import icon_check from "../../../img/icon-check.svg";

export const CheckboxContainer = styled.div`

  width: 100%;
  padding: 12px;
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.lightGrey : props.theme.colors.veryDarkGrey};
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};

  @media (any-hover: hover) {
    &:has(input:hover){
      background-color: rgba(99, 95, 199, 0.25);
    }
  }

  label{
    ${props => props.theme.fonts.body_M};
    color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
    cursor: pointer;

    display: flex;
    align-items: center;
    &::before{
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid rgba(130, 143, 163, 0.248914);
      border-radius: 2px;
      margin-right: 16px;
    }
  }

  position: relative;
  input{
    cursor: pointer;
    opacity: 0;
    position: absolute;
    width: 80%;
    height: 80%;
    
    &:checked{
      &+label{
        text-decoration: line-through;
        /* opacity: 0.5; */
        color: ${props => props.theme.colors.mediumGrey};
      }

      &+label::before{
        content: "";
        /* \\002714 */
        background-color: ${props => props.theme.colors.mainPurple};
        background-image: url(${icon_check});
        background-position: center;
        background-repeat: no-repeat;
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

`;

