import { Background, InputTitleContainer, NewTaskContainerForm, TitleNewTask } from "./style";
import React, { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import { useContext } from 'react';
import { BoardsContext } from "../../../Context/Context";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { useInput } from "../../../hooks/useInput";
import Button from "../../UI/Button";
import { IBoard, IColumn } from '../../../interface';
import CreateSubtasksList from "../../Header_components/CreateSubtasksList";
import { reduserData_actionType } from "../../../Context/reduserData";

interface ICreateBoard {
  closeSetState: Dispatch<SetStateAction<boolean>>;
}

export const CreateBoard: React.FC<ICreateBoard> = ({ closeSetState }) => {
  const { dispatchData } = useContext(BoardsContext);

  //вешаем закрытие на открытое окно
  const refTaskContainer = useRef(null);
  useOutsideClick({ element: refTaskContainer, setStateOutsideClick: closeSetState });

  //Состояние для заполнения новой доски
  const inputTitle = useInput("");
  const [columnsList, setcolumnsList] = useState([""]);

  const MySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTitle.value.length < 1) {
      alert("У доски должно быть название")
      return;
    }

    // Создаем колонки из названий
    let tempColumns: IColumn[] = [];
    columnsList.forEach(columnName => {
      if (columnName.length > 0)
        tempColumns = tempColumns.concat({ name: columnName, tasks: [] });
    });

    const newBoard: IBoard = {
      name: inputTitle.value,
      columns: tempColumns,
    }
    console.log(newBoard);

    dispatchData({ type: reduserData_actionType.addBoard, newBoard });

    closeSetState(false);
  }

  return (
    <>
      <Background >
        <NewTaskContainerForm ref={refTaskContainer} onSubmit={MySubmit}>
          <TitleNewTask>Add New Board</TitleNewTask>
          <InputTitleContainer>
            <p>Name</p>
            <input {...inputTitle} placeholder="Taking world" type="text" />
          </InputTitleContainer>
          <CreateSubtasksList
            subtaskListTitle={columnsList}
            setSubtaskListTitle={setcolumnsList}
            title="Columns"
            textBtn="+ Add New Column"
          />
          <Button type="submit" width="100%" height="40px" text="Create New Board" />
        </NewTaskContainerForm>
      </Background >
    </>
  )

}
