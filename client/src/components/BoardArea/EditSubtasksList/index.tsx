import { ChangeEvent, MouseEvent } from 'react';
import { ISubtask } from '../../../interface';
import Button from '../../UI/Button';
import { SubtasksContainer, SubtasksListContainer } from './style';
import { CreateSubtaskItem } from '../../Header_components/CreateSubtaskItem';

interface IEditSubtasksList {
  subtaskList: ISubtask[];
  setSubtaskList: React.Dispatch<React.SetStateAction<ISubtask[]>>;
}

export const EditSubtasksList: React.FC<IEditSubtasksList> = ({ subtaskList, setSubtaskList }) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const idSubtask = e.target.getAttribute("data-index");  //На input висит data атрибут с индексом соответствующему полозжению в массиве
    const newSubtaskList = subtaskList.concat();
    newSubtaskList[Number(idSubtask)].title = e.target.value;

    setSubtaskList(newSubtaskList);
  }

  const AddNewSubtask = () => {
    setSubtaskList(subtaskList.concat({ title: "", isCompleted: false }));
  }

  const deleteSubtask = (e: MouseEvent<HTMLDivElement>) => {
    const idSubtask = e.currentTarget.getAttribute("data-index");
    const newSubtaskList = subtaskList.concat();

    newSubtaskList.splice(Number(idSubtask), 1);
    console.log(newSubtaskList);

    setSubtaskList(newSubtaskList.concat());
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <SubtasksContainer>
      <p>substasks</p>
      {
        subtaskList.length > 0
          ?
          <SubtasksListContainer>
            {
              subtaskList.map((subtask, index) =>
                <CreateSubtaskItem
                  key={index}
                  index={index}
                  value={subtask.title}
                  onChange={onChange}
                  deleteSubtask={deleteSubtask}
                />)

            }
          </SubtasksListContainer>
          :
          <></>
      }
      <Button
        onClick={AddNewSubtask}
        color='#635FC7'
        colorBG='#635FC71A'
        width="100%"
        height="40px"
        text="+ Add New Subtask"
      />
    </SubtasksContainer>
  )
}
