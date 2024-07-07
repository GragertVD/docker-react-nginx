import React, { useContext } from "react";
import { CheckboxContainer } from "./style";
import { reduserDataTask_actionType } from "../../../Context/reduserDataTask";
import { TaskCardContext } from "../../../Context/Context";


interface Icheckbox {
  labelText: string;
  id: string;
  state?: boolean;
  subtaskId: number;
}

const Checkbox: React.FC<Icheckbox> = ({ labelText, id, state, subtaskId }) => {

  const { dispatchDataTask } = useContext(TaskCardContext);
  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        id={id}
        checked={state}
        onChange={(e) => {

          state
            ?
            dispatchDataTask({ type: reduserDataTask_actionType.disableChecked, payload: subtaskId })
            :
            dispatchDataTask({ type: reduserDataTask_actionType.setChecked, payload: subtaskId })
        }
        }
      />
      <label htmlFor={id}>{labelText}</label>
    </CheckboxContainer>
  )
}

export default Checkbox;