import styled from 'styled-components';

export const DropMenuConteiner = styled.div`
  background-color:  ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.veryDarkGrey};
  position: absolute;
  z-index: 11;
  width: 190px;

  top: 100%;
  right: 0;
  
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  padding: 16px;
`

export const DropMenuList = styled.ul`
  background-color:  ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.veryDarkGrey};

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li{
    ${props => props.theme.fonts.body_L}
    color: ${props => props.theme.colors.mediumGrey};
    cursor: pointer;
    width: 100%;

    &:hover{
      background-color: ${props => props.theme.theme === "light" ? props.theme.colors.lightGrey : props.theme.colors.darkGrey};
    }
  }

  li:last-child{
    color: ${props => props.theme.colors.red};
  }

`
