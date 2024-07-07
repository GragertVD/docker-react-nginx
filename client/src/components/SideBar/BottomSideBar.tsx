import React from 'react'
import ChageTheme from './ChageTheme'
import { ToggleShowSideBar } from './ToggleShowSideBar'
import styled from 'styled-components'
import { IPropsToggleShowSideBar } from '../../interface';
import { useResize } from '../../hooks/useResize';

const BottomSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;


const BottomSideBar: React.FC<IPropsToggleShowSideBar> = ({ StateShowSideBar, setStateShowSideBar }) => {

  const widthWindow = useResize();

  return (
    <BottomSideBarContainer>
      <ChageTheme />
      {
        widthWindow.isScreenMobileL
          ?
          <ToggleShowSideBar {...{ StateShowSideBar, setStateShowSideBar }} />
          :
          <></>
      }
    </BottomSideBarContainer>
  )
}

export default BottomSideBar