import React from 'react'
import styled from 'styled-components'
import ListBoard from './SideBar/ListBoard';
import BottomSideBar from './SideBar/BottomSideBar';
import { IPropsToggleShowSideBar } from '../interface';


const SideBarContainer = styled.aside<{ stateShowSideBar: 'show' | 'hiden' }>`
  transition: background-color 1s, color 1s, top 0.5s, left 0.3s, right 0.3s, box-shadow 1.2s;

  left: ${props => props.stateShowSideBar === 'show' ? '0px' : '-300px'};

  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 14px 32px 30px;

  border-right: 1px solid ${props => props.theme.theme === "light" ? props.theme.colors.linesLight : props.theme.colors.linesDark};
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};

  position: fixed;
  top: 95px;
  bottom: 0;

  ${props => props.theme.beforeTablet}{
    padding: 10px 10px 20px 20px;
    width: 260px;
    top: 79px;
  }

  ${props => props.theme.beforeMobileL}{
    position: absolute;
    height: fit-content;
    left: 25px;
    top: ${props => props.stateShowSideBar === 'show' ? '60px' : '-600px'};
    box-shadow: ${props => props.stateShowSideBar === 'show' ? "0px 240px 0px 300px rgba(0, 0, 0, 0.2)" : "none"};
    border-radius: 10px;
    overflow: hidden;
    max-height: 60vh;
  }
`;


const SideBar: React.FC<IPropsToggleShowSideBar> = ({ StateShowSideBar, setStateShowSideBar }) => {

  return (
    <SideBarContainer stateShowSideBar={StateShowSideBar}>
      <ListBoard />
      <BottomSideBar {...{ StateShowSideBar, setStateShowSideBar }} />
    </SideBarContainer>
  )
}

export default SideBar