import React, { useState } from 'react'
import Logo from '../UI/Logo'
import Button from '../UI/Button'
import iconMenu from "../../img/icon-vertical-ellipsis.svg";
import { useContext } from 'react';
import { BoardsContext } from '../../Context/Context';
import DropMenu, { IMenuItem } from '../UI/DropMenu';
import { reduserData_actionType } from '../../Context/reduserData';
import { AddNewtask } from '../Header_components/AddNewTask';
import { BoardTitle, StyledHeader } from './style';
import { EditBoard } from '../Header_components/EditBoard';
import { useResize } from '../../hooks/useResize';
import { IPropsToggleShowSideBar } from '../../interface';


export const Header: React.FC<IPropsToggleShowSideBar> = ({ StateShowSideBar, setStateShowSideBar }) => {

  const { dispatchData, data, indexActiveBoard, setIndexActiveBoard } = useContext(BoardsContext);

  const [showDropMenu, setshowDropMenu] = useState(false);
  const [openEditBoard, setOpenEditBoard] = useState(false);

  const widthWindow = useResize();

  //Создаем массив объектов для выпадающего меню.
  const listDropMenu: IMenuItem | IMenuItem[] =
    [
      {
        text: "Edit Board",
        action: () => {
          setOpenEditBoard(true);
        }
      },
      {
        text: "Delete Board",
        action: () => {
          dispatchData({ type: reduserData_actionType.deleteBoard, indexActiveBoard });
          setIndexActiveBoard(0);
        }
      },
    ];


  const [openNewCard, setOpenNewCard] = useState(false);

  return (
    <>
      <StyledHeader>
        {/* При нажатии на названия доски или логотип скрывается/показывается меню с досками, в основном надо на мобилках, но оставил и на больших экранах */}
        <div onClick={() => { setStateShowSideBar(StateShowSideBar === "hiden" ? "show" : "hiden") }}>
          <Logo />
          {
            data && (data.boards !== undefined && data.boards.length > 0 && indexActiveBoard !== undefined)
              ? <BoardTitle StateShowSideBar={StateShowSideBar}> {data.boards[indexActiveBoard].name}</BoardTitle>
              : <BoardTitle StateShowSideBar={StateShowSideBar}> Boards missing </BoardTitle>
          }
        </div>
        <div>
          <Button
            onClick={() => { setOpenNewCard(true) }}
            text={widthWindow.isScreenMobileM ? "+ Add new task" : "+"}
            height={widthWindow.isScreenMobileM ? "48px" : "32px"}
          />
          <button
            aria-label='settings'
            style={{ position: "relative", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setshowDropMenu(!showDropMenu)}>    {/*блок для  того, чтобы выпадающее меню появлялось рядом с кнопкой */}
            <img
              onClick={() => setshowDropMenu(!showDropMenu)}
              src={iconMenu} alt="settings" />
            {
              showDropMenu
                ?
                <DropMenu listItem={listDropMenu} close={setshowDropMenu} />
                :
                <></>
            }
          </button>
        </div>
      </StyledHeader>
      {/* Popup для создания новой задачи */}
      {
        openNewCard
          ?
          <AddNewtask closeSetState={setOpenNewCard} />
          :
          <></>
      }
      {/* Popup для редактирования доски */}
      {
        openEditBoard
          ?
          <EditBoard closeSetState={setOpenEditBoard} />
          :
          <></>
      }
    </>

  )
}
