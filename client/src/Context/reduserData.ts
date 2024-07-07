import { IBoard, IColumn, IData, ITask } from "../interface";

export enum reduserData_actionType {
  getData = 'getData',
  taskChangeStatus = 'taskChangeStatus',
  addColumn = 'addColumn',
  addBoard = 'addBoard',
  deleteTask = 'deleteTask',
  deleteBoard = 'deleteBoard',
  editBoard = 'editBoard',
  addTask = 'addTask',
  updateTask = 'updateTask',
}

export interface IactionData {
  type: reduserData_actionType;
  payload?: number | string | IData;
  indexActiveBoard?: number;
  task?: ITask;
  newBoard?: IBoard;
}

export const reduserData = (state: IData, action: IactionData) => {
  switch (action.type) {
    case reduserData_actionType.getData:
      let temp = action.payload as IData;
      return { ...temp };

    case reduserData_actionType.addColumn:
      const newColumn: IColumn = { name: "newColumn", tasks: [] };
      if (state.boards && action.indexActiveBoard !== undefined) {
        newColumn.name = `newColumn ${state.boards[action.indexActiveBoard].columns.length + 1}`;
        state.boards[action.indexActiveBoard].columns.push(newColumn);
      }

      return { ...state };

    case reduserData_actionType.addBoard:
      if (state.boards && action.newBoard !== undefined)
        state.boards.push(action.newBoard);

      return { ...state };

    case reduserData_actionType.editBoard:
      if (state.boards && action.newBoard !== undefined && action.indexActiveBoard !== undefined && state.boards[action.indexActiveBoard] !== undefined) {
        console.log("oldBoard", state.boards[action.indexActiveBoard]);
        console.log("newBoard", action.newBoard);

        state.boards[action.indexActiveBoard].columns.forEach(oldColumn => {
          if (action.newBoard !== undefined) {
            const idIndenticColumn = action.newBoard.columns.findIndex(newColumn => {
              return newColumn.name === oldColumn.name
            });
            console.log(idIndenticColumn);

            if (idIndenticColumn >= 0)
              action.newBoard.columns[idIndenticColumn] = oldColumn;
          }
        });

        state.boards[action.indexActiveBoard] = { ...action.newBoard };
      }

      return { ...state };

    case reduserData_actionType.addTask:
      if (state.boards && action.indexActiveBoard !== undefined && action.task !== undefined) {
        //функция вызывается дважды, поэотму сделал блокирую добавление двух задач с одинаковым именем, пока там, позже обдумаю надо ли вообще позволять создавать одинаковые задачи. навреное нет, потмоу что запарно реализовывать в данном учебном проекте, хотя функционал нужен. Надо подумать
        const columnId = state.boards[action.indexActiveBoard].columns.findIndex(
          (column) => {
            const taskId = column.tasks.findIndex((task) => {
              if (task)
                return (task.title === (action.task as ITask).title)
              else
                return 0;
            });
            if (taskId !== -1)
              return true;
            else
              return false;
          }
        )
        if (columnId !== -1) {
          alert("Задача с таким названием уже существует")
          return state;
        }

        const idColumn = state.boards[action.indexActiveBoard].columns.findIndex((column) => column.name === (action.task as ITask).status);
        state.boards[action.indexActiveBoard].columns[idColumn].tasks.push(action.task);
        return { ...state };

      }
      return state;

    case reduserData_actionType.deleteTask:

      if (state.boards && action.indexActiveBoard !== undefined && action.task !== undefined) {
        let taskId = -1;
        const columnId = state.boards[action.indexActiveBoard].columns.findIndex(
          (column) => {
            taskId = column.tasks.findIndex((task) => {
              if (task)
                return (task.title === (action.task as ITask).title)
              else
                return 0;
            });
            if (taskId !== -1)
              return true;
            else
              return false;
          }
        )

        if (taskId !== -1) {

          state.boards[action.indexActiveBoard].columns[columnId].tasks.splice(taskId, 1);

          return { ...state };
        }
      }

      return state;

    case reduserData_actionType.taskChangeStatus:
      let columnNewName: string = "";
      let taskTitle: string = "";
      const newData: IData = { ...state };
      let columnPrevId: number = -1;
      let columnNewId: number = -1;
      let taskId: number = -1;


      if (newData.boards && state.boards && action.indexActiveBoard !== undefined && action.task !== undefined) {
        taskTitle = action.task.title;
        columnNewName = action.task.status;

        columnNewId = state.boards[action.indexActiveBoard].columns.findIndex((element) => (element.name === columnNewName));

        columnPrevId = state.boards[action.indexActiveBoard].columns.findIndex(
          (column) => {
            taskId = column.tasks.findIndex((task) => {
              if (task)
                return (task.title !== undefined && task.title === taskTitle)
              else
                return 0;
            });
            if (taskId !== -1)
              return true;
            else
              return false;
          }
        );

        if (taskId !== -1 && columnNewId !== columnPrevId && columnNewId !== -1) {

          newData.boards[action.indexActiveBoard].columns[columnPrevId].tasks.splice(taskId, 1);
          newData.boards[action.indexActiveBoard].columns[columnNewId].tasks.push(action.task);

          return { ...newData };
        }
      }

      return state;

    case reduserData_actionType.deleteBoard:
      console.log(state);

      if (state.boards && action.indexActiveBoard !== undefined)
        state.boards.splice(action.indexActiveBoard, 1);

      console.log(state);


      return { ...state };

    default:
      return state
  }
}