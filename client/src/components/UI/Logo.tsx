import React from 'react';
import {ReactComponent as LogoKanban} from "../../img/logo-dark.svg";
import styled from 'styled-components';

const LogoContainer = styled.div`
  padding-right: 2px;
  border-right: 1px solid ${props => props.theme.theme === "light" ? props.theme.colors.linesLight : props.theme.colors.linesDark};

  svg{
    g path{
      fill: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
    }
  }
  ${props => props.theme.beforeMobileM}{
    border-right: none;
  }

`;

const Logo: React.FC = () => {
  return (
    <LogoContainer aria-label="Приложение канбан доски">
      <LogoKanban />
    </LogoContainer>
  )
}

export default Logo;