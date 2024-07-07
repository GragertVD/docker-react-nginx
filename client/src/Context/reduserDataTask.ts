import { ITask } from "../interface";

export enum reduserDataTask_actionType {
  setChecked = 'setChecked',
  disableChecked = 'disableChecked',
  changeStatus = 'changeStatus',
}

export interface Iaction {
  type: reduserDataTask_actionType;
  payload?: number | string;
}

export const reduserDataTask = (state: ITask, action: Iaction) => {
  switch (action.type) {

    case reduserDataTask_actionType.setChecked:
      state.subtasks && typeof (action.payload) === "number" && (state.subtasks[action.payload].isCompleted = true);

      return { ...state };

    case reduserDataTask_actionType.disableChecked:
      state.subtasks && typeof (action.payload) === "number" && (state.subtasks[action.payload].isCompleted = false);
      return { ...state };

    case reduserDataTask_actionType.changeStatus:
      const tempState = { ...state };

      typeof (action.payload) === "string" && (tempState.status = action.payload);

      return { ...tempState };

    default:
      return state
  }
};