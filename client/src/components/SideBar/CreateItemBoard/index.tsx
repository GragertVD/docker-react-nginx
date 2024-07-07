import { useState } from 'react'
import { ReactComponent as IconBoard } from "../../../img/icon-board.svg";
import { Item } from './style';
import { CreateBoard } from '../CreateBoard';


function CreateItemBoard() {
  const [openCreateBoard, setOpenCreateBoard] = useState(false);


  return (
    <>
      <Item onClick={() => setOpenCreateBoard(true)}><IconBoard />+ Create New Board</Item>
      {
        openCreateBoard
          ?
          <CreateBoard closeSetState={setOpenCreateBoard} />
          :
          <></>
      }
    </>
  )
}

export default CreateItemBoard