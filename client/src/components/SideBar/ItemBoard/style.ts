import styled from 'styled-components'

export const Item = styled.li`
  color: ${props => props.theme.colors.mediumGrey};
  background: transperty;
  overflow: hidden;
  transition: all 0.15s;

  
  &.active{
    background-color: ${props => props.theme.colors.mainPurple};
    color: ${props => props.theme.colors.white};
    path{
      fill: ${props => props.theme.colors.white};
    }
  }
  @media (any-hover: hover) {
    &:hover{
      background-color: rgba(99, 95, 199 , 0.1);
      color: ${props => props.theme.colors.mainPurple};
      path{
        fill: ${props => props.theme.colors.mainPurple};
      }
    }
    &.active:hover{
      background-color: ${props => props.theme.colors.mainPurpleHover};
      color: ${props => props.theme.colors.white};
      path{
        fill: ${props => props.theme.colors.white};
      }
    }
  }

  width: 100%;
  height: 48px;
  margin-left: -32px;
  padding-left: 32px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  cursor: pointer;

  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  svg{
    flex-shrink: 0;
    margin-right: 16px;
  }
`;