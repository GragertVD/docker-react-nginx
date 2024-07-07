import { Background, InputDescriptionContainer, InputTitleContainer, NewTaskContainerForm, TitleNewTask } from "./style";
import React, { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import { useContext } from 'react';
import { BoardsContext, TaskCardContext } from "../../../Context/Context";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { useInput } from "../../../hooks/useInput";
import Button from "../../UI/Button";
import { ITask, ISubtask } from '../../../interface';
import { reduserData_actionType } from "../../../Context/reduserData";
import CreateSubtasksList from "../../Header_components/CreateSubtasksList";
import SelectStatusCreateTask from "../../Header_components/SelectStatusCreateTask";
import { EditSubtasksList } from "../EditSubtasksList";

interface IEditTask {
  setOpenEditTask: Dispatch<SetStateAction<boolean>>;
}

export const EditTask: React.FC<IEditTask> = ({ setOpenEditTask }) => {

  //Получаем данные текущей доски и карточки
  const { data, dispatchData, indexActiveBoard } = useContext(BoardsContext);
  const { dataTask } = useContext(TaskCardContext);

  //вешаем закрытие на открытое окно
  const refTaskContainer = useRef(null);
  useOutsideClick({ element: refTaskContainer, setStateOutsideClick: setOpenEditTask });

  //Состояние для заполнения новой задачи
  const inputTitle = useInput(dataTask.title);
  const inputDescription = useInput(dataTask.description ? dataTask.description : '');
  const [selectStatus, setSelectStatus] = useState(dataTask.status);
  const [subtaskList, setSubtaskList] = useState(dataTask.subtasks ? dataTask.subtasks : [{ title: "", isCompleted: false }]);


  const MySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTitle.value.length < 1) {
      alert("У задачи должно быть название")
      return;
    }

    // Создаем массив подзадач исключая подзадачи без названия
    let tempSubtask: ISubtask[] = [];
    subtaskList.forEach(subtask => {
      if (subtask.title.length > 0)
        tempSubtask = tempSubtask.concat(subtask);
    });

    const newTask: ITask = {
      title: inputTitle.value,
      status: selectStatus,
      description: inputDescription.value,
      subtasks: tempSubtask,
    }

    dispatchData({ type: reduserData_actionType.deleteTask, task: dataTask, indexActiveBoard });
    dispatchData({ type: reduserData_actionType.addTask, task: newTask, indexActiveBoard });
    setOpenEditTask(false);
  }

  if (data.boards) {
    return (
      <>
        <Background >
          <NewTaskContainerForm ref={refTaskContainer} onSubmit={MySubmit}>
            <TitleNewTask>Edit Task</TitleNewTask>
            <InputTitleContainer>
              <p>Title</p>
              <input {...inputTitle} placeholder="e.g. Take coffee break" type="text" />
            </InputTitleContainer>
            <InputDescriptionContainer>
              <p>Description</p>
              <textarea {...inputDescription} placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.k" />
            </InputDescriptionContainer>
            <EditSubtasksList subtaskList={subtaskList} setSubtaskList={setSubtaskList} />
            <SelectStatusCreateTask selectStatus={selectStatus} setSelectStatus={setSelectStatus} />
            <Button type="submit" width="100%" height="40px" text="Save Changes" />
          </NewTaskContainerForm>
        </Background >
      </>
    )
  }
  else
    return null;
}
