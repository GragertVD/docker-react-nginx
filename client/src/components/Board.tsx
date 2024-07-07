import React from 'react'
import { BordArea } from './BordArea';
import SideBar from './SideBar';
import styled from 'styled-components';
import { IPropsToggleShowSideBar } from '../interface';

const BoardContainer = styled.main`
  display: flex;
  min-height: 100%;

  position: relative;
  transition: all 0.3s;
`;

export const Board: React.FC<IPropsToggleShowSideBar> = ({ StateShowSideBar, setStateShowSideBar }) => {

  return (
    <BoardContainer>
      <SideBar {...{ StateShowSideBar, setStateShowSideBar }} />
      <BordArea {...{ StateShowSideBar, setStateShowSideBar }} />
    </BoardContainer>
  )
}
