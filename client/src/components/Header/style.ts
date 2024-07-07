import styled from "styled-components";
import IconArrow from "../../img/icon-chevron-up.svg";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  padding: 20px 30px 28px 24px;
  border-bottom: 1px solid ${props => props.theme.theme === "light" ? props.theme.colors.linesLight : props.theme.colors.linesDark};
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
  color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
  transition: background-color 1s, color 1s;

  & div{
    display: flex;
    align-items: center;
    gap: 25px;
    /* height: 100%; */
  }

  h1{
    ${props => props.theme.fonts.heading_XL}
    /* max-width: 50%; */
  }

  svg{
    cursor: pointer;
    margin-right: 120px;
  }


  ${props => props.theme.beforeTablet}{
    height: 80px;
    padding: 16px 10px;

    h1{
      font-size: 20px;
      line-height: 25px;
    }

    svg{
      transform: scale(0.85);
      margin-right: 40px;
    }

  }

    ${props => props.theme.fromTabletSM}{
    height: 80px;
    padding: 16px 10px;

    div{
      gap: 15px;
    }

    h1{
      font-size: 20px;
      line-height: 25px;
    }

    svg{
      position: relative;
      /* left: -15px; */
      transform: scale(0.7);
      margin-right: 2px;
    }

    button{
      padding: 10px 15px;
    }  
  }


  ${props => props.theme.beforeMobileL}{
    height: 64px;
    padding: 5px;
    padding-right: 15px;
    
    div:not(:last-child){
      gap: 5px;
    }

    h1{
      font-size: 18px;
      line-height: 23px;
    }

    svg{
      width: 30px;
      margin-right: 10px;
    }

  }

  ${props => props.theme.beforeMobileM}{
    button{
      padding: 5px 12px;
      font-size: 22px;
    }  
  }
`;

export const BoardTitle = styled.h1<{ StateShowSideBar: 'show' | 'hiden' }>`

  max-width: 40vw;
  overflow: hidden;

  ${props => props.theme.beforeMobileL}{
    display: flex;
    align-items: center;
    &::after{
      content: "";
      display: inline-block;
      background-image: url(${IconArrow});
      background-position: center;
      background-repeat: no-repeat;
      width: 12px;
      height: 12px;
      margin: 5px;

      transform: rotate(${props => props.StateShowSideBar === "show" ? "0deg" : "180deg"});
      transition: transform 0.3s;
    }
  }
`;