import styled from 'styled-components';

export const StyledButton = styled.button<{ colorBG?: string, color?: string, height: string, width: string | undefined }>`
  cursor: pointer;
  color:${props => props.color || 'white'};
  background: ${props => props.colorBG || props.theme.colors.mainPurple};
  padding: 15px 25px;
  height: ${props => props.height};
  width: ${props => props.width || 'auto'};
  border: none;
  border-radius: 24px;
  transition: all 0.12s;
  &:focus{
    /* outline: none; */
    /* border: 1px solid ${props => props.color !== props.theme.colors.mainPurple? "black": props.theme.colors.mainPurple}; */
  }
  @media (any-hover: hover) {
    &:hover{
      background: ${props => props.colorBG || props.theme.colors.mainPurpleHover};
      filter: grayscale(${props => props.colorBG? "1" : "0"});
    }
  }

  ${props => props.theme.beforeMobileM}{
    padding: 14px 18px;
  }
`