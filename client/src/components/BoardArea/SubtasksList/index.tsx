import { TaskCardContext } from '../../../Context/Context';
import Checkbox from '../../UI/Checkbox';
import { SubtasksContainer } from './style';
import { useContext } from 'react';


const SubtasksList: React.FC = () => {

  const { dataTask } = useContext(TaskCardContext);

  let quantitySubtasksAll: number = 0;
  let quantitySubtasksComlited: number = 0;

  if (dataTask.subtasks !== undefined) {
    quantitySubtasksAll = dataTask.subtasks.length;
    const subtasksComlited = dataTask.subtasks.filter(({ isCompleted }) => isCompleted);
    quantitySubtasksComlited = subtasksComlited.length;
  }

  return (
    <SubtasksContainer>
      {   //Строка с учетом выполненых подзадач
        quantitySubtasksAll === 0 ?
          <></>
          :
          <p>Substasks ({quantitySubtasksComlited} of {quantitySubtasksAll})</p>
      }
      {   //чеклист с подзадачами
        dataTask.subtasks !== undefined
          ?
          dataTask.subtasks.map((subtask, index) =>
            <Checkbox
              key={index}
              subtaskId={index}
              labelText={subtask.title}
              state={subtask.isCompleted}
              id="ch1"
            />)
          :
          <></>
      }
    </SubtasksContainer>
  )
}

export default SubtasksList;