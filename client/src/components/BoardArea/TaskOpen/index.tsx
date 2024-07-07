import { Background, Description, TaskOpenContainer, Title } from "./style";
import iconMenu from "../../../img/icon-vertical-ellipsis.svg";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { useContext, useEffect } from 'react';
import { BoardsContext, TaskCardContext } from "../../../Context/Context";
import SubtasksList from "../SubtasksList";
import SelectStatus from "../../UI/SelectStatus";
import DropMenu, { IMenuItem } from "../../UI/DropMenu";
import { reduserData_actionType } from "../../../Context/reduserData";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface ITaskOpen {
  setOpenCard: Dispatch<SetStateAction<boolean>>;
  setOpenEditTask: Dispatch<SetStateAction<boolean>>;
}


export const TaskOpen: React.FC<ITaskOpen> = ({ setOpenCard, setOpenEditTask }) => {

  const { dataTask } = useContext(TaskCardContext);
  const { dispatchData, indexActiveBoard } = useContext(BoardsContext);

  //для изменения статуса и переноса в новый стобец при закрытии карточки
  const actualTask = useRef(dataTask);
  actualTask.current = dataTask;
  useEffect(() => {
    const oldStatus = dataTask.status;
    return () => {
      if (actualTask.current.status !== oldStatus)
        dispatchData({ type: reduserData_actionType.taskChangeStatus, indexActiveBoard, task: actualTask.current });
    }
  }, []);


  const [showDropMenu, setshowDropMenu] = useState(false);

  //Создаем массив объектов для выпадающего списка.
  const listDropMenu: IMenuItem | IMenuItem[] =
    [
      {
        text: "Edit Task",
        action: () => {
          setOpenEditTask(true);
          setOpenCard(false);
        }
      },
      {
        text: "Delete Task",
        action: () => {
          dispatchData({ type: reduserData_actionType.deleteTask, indexActiveBoard: indexActiveBoard, task: dataTask });
        }
      },
    ];

  const refTaskContainer = useRef(null);
  useOutsideClick({ element: refTaskContainer, setStateOutsideClick: setOpenCard })


  return (
    <>
      <Background >
        <TaskOpenContainer ref={refTaskContainer}>
          <Title>
            <h3>{dataTask.title}</h3>

            <button
              style={{ position: "relative", background: "none", border: "none" }}>
              <img
                onClick={() => setshowDropMenu(!showDropMenu)}
                src={iconMenu} alt="картинка" />
              {
                showDropMenu
                  ?
                  <DropMenu listItem={listDropMenu} close={setshowDropMenu} />
                  :
                  <></>
              }
            </button>
          </Title>
          <Description>
            {dataTask.description}
          </Description>
          <SubtasksList />
          <SelectStatus />
        </TaskOpenContainer>
      </Background >
    </>
  )
}
