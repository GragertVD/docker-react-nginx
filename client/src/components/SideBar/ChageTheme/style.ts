import styled from 'styled-components';


export const ChangeThemeContainer = styled.div`
  height: 48px;
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 23.5px;
  padding: 15px 10px 32px 30px;
  border-radius: 10px;

  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.lightGrey : props.theme.colors.veryDarkGrey};

  svg{
    cursor: pointer;
  }
`;