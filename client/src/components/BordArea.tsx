import React, { useContext } from 'react'
import styled from 'styled-components';
import { IBoard, IPropsToggleShowSideBar } from '../interface';
import BoardEmpty from './BoardArea/BoardEmpty';
import BoardColumn from './BoardArea/BoardColumn';
import { BoardsContext } from '../Context/Context';
import AddColumn from './BoardArea/AddColumn';


const BoardAreaContainer = styled.div<{ StateShowSideBar: 'show' | 'hiden', countColumn: number }>`
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.lightGrey : props.theme.colors.veryDarkGrey};
  /* height: 100%; */
  overflow: auto;
   &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.mainPurpleHover};
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.mediumGrey};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar-corner {
    background-color: ${props => props.theme.colors.mediumGrey};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 20px;
    
  }
  & {
    -ms-overflow-style: auto;
    scrollbar-color: ${props => props.theme.colors.mainPurpleHover} ${props => props.theme.colors.mediumGrey};
    scrollbar-width: thin;
  }
  width: 100vw;
  transition: background-color 1s, color 1s, padding 0.3s;

  padding-top: 24px;
  padding-right: 24px;
  padding-left: ${props => props.StateShowSideBar === 'show' ? '324px' : '24px'};
  padding-bottom: 106px;
  
  display: grid;
  grid-template-columns: ${props => `repeat(${props.countColumn}, minmax(250px, 300px))`};
  grid-gap: 24px;

  ${props => props.theme.beforeMobileL}{
    padding-left: 24px;
    pointer-events: ${props => props.StateShowSideBar === 'show' ? 'none' : 'all'};
  }
`;


export const BordArea: React.FC<IPropsToggleShowSideBar> = ({ StateShowSideBar, setStateShowSideBar }) => {

  const { data, indexActiveBoard } = useContext(BoardsContext);


  if (data && data.boards !== undefined && data.boards.length > 0 && indexActiveBoard !== undefined) {
    const activeBoard: IBoard = data.boards[indexActiveBoard];

    if (activeBoard.columns.length) {
      return (
        <BoardAreaContainer StateShowSideBar={StateShowSideBar} countColumn={activeBoard.columns.length + 1}>
          {
            activeBoard.columns.map((dataColumn, index) => <BoardColumn key={index} index={index} {...dataColumn} />)
          }
          < AddColumn />
        </BoardAreaContainer>
      )
    } else {
      return (
        <BoardAreaContainer StateShowSideBar={StateShowSideBar} countColumn={0}>
          <BoardEmpty />
        </BoardAreaContainer>
      )
    }
  } else {
    return (
      <div>load</div>
    )
  }

}
