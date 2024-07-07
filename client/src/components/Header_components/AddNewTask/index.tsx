import { Background, InputDescriptionContainer, InputTitleContainer, NewTaskContainerForm, TitleNewTask } from "./style";
import React, { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import { useContext } from 'react';
import { BoardsContext } from "../../../Context/Context";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { useInput } from "../../../hooks/useInput";
import Button from "../../UI/Button";
import CreateSubtasksList from "../CreateSubtasksList";
import SelectStatusCreateTask from "../SelectStatusCreateTask";
import { ITask, ISubtask } from '../../../interface';
import { reduserData_actionType } from "../../../Context/reduserData";

interface ITaskOpen {
  closeSetState: Dispatch<SetStateAction<boolean>>;
}

export const AddNewtask: React.FC<ITaskOpen> = ({ closeSetState }) => {

  //Получаем данные текущей доски
  const { data, dispatchData, indexActiveBoard } = useContext(BoardsContext);

  //вешаем закрытие на открытое окно
  const refTaskContainer = useRef(null);
  useOutsideClick({ element: refTaskContainer, setStateOutsideClick: closeSetState });

  //Состояние для заполнения новой задачи
  const inputTitle = useInput('');
  const inputDescription = useInput('');
  const [selectStatus, setSelectStatus] = useState(data.boards ? data.boards[indexActiveBoard].columns[0].name : '');
  const [subtaskListTitle, setSubtaskListTitle] = useState([""]);

  //При отправки формы создаем новую задачу, заполняем её и добавляем в доску
  const MySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTitle.value.length < 1) {
      alert("Нельзя создать задачу без названия")
      return;
    }

    // Создаем массив подзадач из списка названий подзадач
    let tempSubtask: ISubtask[] = [];
    subtaskListTitle.forEach(subtaskTitle => {
      if (subtaskTitle.length > 0)
        tempSubtask = tempSubtask.concat({ title: subtaskTitle, isCompleted: false });
    });

    const newTask: ITask = {
      title: inputTitle.value,
      status: selectStatus,
      description: inputDescription.value,
      subtasks: tempSubtask,
    }
    dispatchData({ type: reduserData_actionType.addTask, task: newTask, indexActiveBoard });
    closeSetState(false);
  }

  if (data.boards) {
    return (
      <>
        <Background >
          <NewTaskContainerForm ref={refTaskContainer} onSubmit={MySubmit}>
            <TitleNewTask>Add New Task</TitleNewTask>
            <InputTitleContainer>
              <p>Title</p>
              <input {...inputTitle} placeholder="e.g. Take coffee break" type="text" />
            </InputTitleContainer>
            <InputDescriptionContainer>
              <p>Description</p>
              <textarea {...inputDescription} placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.k" />
            </InputDescriptionContainer>
            <CreateSubtasksList subtaskListTitle={subtaskListTitle} setSubtaskListTitle={setSubtaskListTitle} />
            <SelectStatusCreateTask selectStatus={selectStatus} setSelectStatus={setSelectStatus} />
            <Button type="submit" width="100%" height="40px" text="Create Task" />
          </NewTaskContainerForm>
        </Background >
      </>
    )
  }
  else
    return null;
}
