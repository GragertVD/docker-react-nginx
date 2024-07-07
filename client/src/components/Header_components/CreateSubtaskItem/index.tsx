import { IconCrossContainer, SubtaskItemContainer } from "./style"
import { ChangeEvent, MouseEvent } from 'react';
import iconCross from "../../../img/icon-cross.svg";


interface ICreateSubtaskItem {
  value: string;
  index: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  deleteSubtask: (e: MouseEvent<HTMLDivElement>) => void;
}

export const CreateSubtaskItem: React.FC<ICreateSubtaskItem> = ({ value, index, onChange, deleteSubtask }) => {

  return (
    <SubtaskItemContainer>
      <input
        value={value}
        onChange={onChange}
        placeholder="e.g. Make coffee"
        type="text"
        data-index={index}
      />
      <IconCrossContainer onClick={deleteSubtask} data-index={index}>
        <img src={iconCross} alt="picture cross" />
      </IconCrossContainer>
    </SubtaskItemContainer>
  )
}
