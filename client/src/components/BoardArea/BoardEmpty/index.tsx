import React from 'react'
import { BoardEmptyContainer } from './style';
import Button from '../../UI/Button';
import { reduserData_actionType } from '../../../Context/reduserData';
import { BoardsContext } from '../../../Context/Context';
import { useContext } from 'react';


const BoardEmpty: React.FC = () => {

  const { dispatchData, indexActiveBoard } = useContext(BoardsContext);

  const addColumn = () => {
    dispatchData({ type: reduserData_actionType.addColumn, indexActiveBoard });
  }

  return (
    <BoardEmptyContainer>
      <div>This board is empty. Create a new column to get started.</div>
      <Button onClick={addColumn} text={'+ Add New Column'} />
    </BoardEmptyContainer>
  )
}

export default BoardEmpty;