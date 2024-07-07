import { Background, InputTitleContainer, NewTaskContainerForm, TitleNewTask } from "./style";
import React, { Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { useContext } from 'react';
import { BoardsContext } from "../../../Context/Context";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { useInput } from "../../../hooks/useInput";
import Button from "../../UI/Button";
import { IBoard, IColumn } from '../../../interface';
import CreateSubtasksList from "../CreateSubtasksList";
import { reduserData_actionType } from "../../../Context/reduserData";

interface IEditBoard {
  closeSetState: Dispatch<SetStateAction<boolean>>;
}

export const EditBoard: React.FC<IEditBoard> = ({ closeSetState }) => {

  useEffect(() => {
    alert("Будьте внимательны, при переименовании столбца с задачами, задачи будут удалены");
  }, []);


  //Получаем данные текущей доски и карточки
  const { data, dispatchData, indexActiveBoard } = useContext(BoardsContext);
  //вешаем закрытие на открытое окно
  const refTaskContainer = useRef(null);
  useOutsideClick({ element: refTaskContainer, setStateOutsideClick: closeSetState });

  //Состояние для обновления данных о доске
  const inputTitle = useInput(data.boards && data.boards[indexActiveBoard] ? data.boards[indexActiveBoard].name : "");

  let listExistColumnName: string[] = [];
  if (data.boards && data.boards[indexActiveBoard])
    data.boards[indexActiveBoard].columns.forEach(column => {
      listExistColumnName.push(column.name);
    });

  const [columnsList, setcolumnsList] = useState(listExistColumnName);

  if (data.boards && data.boards[indexActiveBoard]) {
    const MySubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (inputTitle.value.length < 1) {
        alert("У доски должно быть название")
        return;
      }

      // Создаем колонки из названий
      let tempColumns: IColumn[] = [];
      columnsList.forEach(columnName => {
        tempColumns = tempColumns.concat({ name: columnName, tasks: [] });
      });

      const newBoard: IBoard = {
        name: inputTitle.value,
        columns: tempColumns,
      }

      dispatchData({ type: reduserData_actionType.editBoard, indexActiveBoard, newBoard });
      closeSetState(false);
    }

    return (
      <>
        <Background >
          <NewTaskContainerForm ref={refTaskContainer} onSubmit={MySubmit}>
            <TitleNewTask>Edit Board</TitleNewTask>
            <InputTitleContainer>
              <p>Board Name</p>
              <input {...inputTitle} placeholder="Taking world" type="text" />
            </InputTitleContainer>
            <CreateSubtasksList
              subtaskListTitle={columnsList}
              setSubtaskListTitle={setcolumnsList}
              title="Board Columns"
              textBtn="+ Add New Column"
            />
            <Button type="submit" width="100%" height="40px" text="Save Changes" />
          </NewTaskContainerForm>
        </Background >
      </>
    )
  }
  else
    return null;

}
