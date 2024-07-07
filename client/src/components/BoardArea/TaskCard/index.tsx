import { TaskCardContainer } from "./style";
import React from "react";
import { TaskOpen } from '../TaskOpen/index';
import { useContext, useState } from 'react';
import { TaskCardContext } from "../../../Context/Context";
import { EditTask } from "../EditTask";


const TaskCard: React.FC = () => {
  const { dataTask } = useContext(TaskCardContext);

  const [openCard, setOpenCard] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);


  let quantitySubtasksAll: number = 0;
  let quantitySubtasksComlited: number = 0;

  if (dataTask.subtasks !== undefined) {
    quantitySubtasksAll = dataTask.subtasks.length;
    const subtasksComlited = dataTask.subtasks.filter(({ isCompleted }) => isCompleted);
    quantitySubtasksComlited = subtasksComlited.length;
  }

  
  return (
    <>
      <TaskCardContainer onClick={() => { setOpenCard(true)}}>
        <h5>{dataTask.title}</h5>
        {   //Строка с учетом выполненых подзадач
          quantitySubtasksAll === 0 ?
            <p>0 substasks</p>
            :
            <p>{quantitySubtasksComlited} of {quantitySubtasksAll} substasks</p>
        }
      </TaskCardContainer>
      {
        openCard
          ?
          <TaskOpen setOpenCard={setOpenCard} setOpenEditTask={setOpenEditTask} />
          :
          <></>
      }
      {
        openEditTask
          ?
          <EditTask setOpenEditTask={setOpenEditTask} />
          :
          <></>
      }
    </>
  )
}

export default TaskCard;