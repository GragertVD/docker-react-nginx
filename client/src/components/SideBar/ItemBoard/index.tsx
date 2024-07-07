import React from 'react'
import { ReactComponent as IconBoard } from "../../../img/icon-board.svg";
import { Item } from './style';
import { useContext } from 'react';
import { BoardsContext } from '../../../Context/Context';


interface IPropsItemBoard {
  index: number;
  nameBoard: string;
  active: boolean;
};

export const ItemBoard: React.FC<IPropsItemBoard> = (props) => {

  const { setIndexActiveBoard } = useContext(BoardsContext);

  return (
    <Item role="button" tabIndex={0} className={`${props.active ? 'active' : ''}`}
      onClick={
        (e: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number = props.index) =>
          setIndexActiveBoard(index)
      }
      onKeyDown={
        (e: React.KeyboardEvent<HTMLLIElement>, index: number = props.index) =>{
          if(e.key == "Enter")
            setIndexActiveBoard(index)
        }
      }
    ><IconBoard />{props.nameBoard}</Item>
  )
}
