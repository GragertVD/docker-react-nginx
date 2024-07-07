import { ChangeEvent, MouseEvent } from 'react';
import { ISubtask } from '../../../interface';
import Button from '../../UI/Button';
import { CreateSubtaskItem } from '../CreateSubtaskItem';
import { SubtasksContainer, SubtasksListContainer } from './style';

interface ICreateSubtasksList {
  subtaskListTitle: string[];
  setSubtaskListTitle: React.Dispatch<React.SetStateAction<string[]>>;
  title?: string;
  textBtn?: string;
  placeholder?: string;
}

const CreateSubtasksList: React.FC<ICreateSubtasksList> = ({ subtaskListTitle, setSubtaskListTitle, title = "subtask", textBtn ="+ Add New Subtask" }) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const idSubtask = e.target.getAttribute("data-index");  //На input висит data атрибут с индексом соответствующему полозжению в массиве
    const newSubtaskList = subtaskListTitle.concat();
    newSubtaskList[Number(idSubtask)] = e.target.value;

    setSubtaskListTitle(newSubtaskList);
  }

  const AddNewSubtask = () => {
    setSubtaskListTitle(subtaskListTitle.concat(""));
  }

  const deleteSubtask = (e: MouseEvent<HTMLDivElement>) => {
    const idSubtask = e.currentTarget.getAttribute("data-index");
    const newSubtaskList = subtaskListTitle.concat();

    newSubtaskList.splice(Number(idSubtask), 1);
    console.log(newSubtaskList);

    setSubtaskListTitle(newSubtaskList.concat());
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <SubtasksContainer>
      <p>{title}</p>
      {
        subtaskListTitle.length > 0
          ?
          <SubtasksListContainer>
            {
              subtaskListTitle.map((subtask, index) =>
                <CreateSubtaskItem
                  key={index}
                  index={index}
                  value={subtask}
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
        text={textBtn}
      />
    </SubtasksContainer>
  )
}

export default CreateSubtasksList;