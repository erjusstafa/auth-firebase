import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Task } from './type';
import { v4 as uuid } from 'uuid';
import userSliceReducer from "../../actions/authSlice";

const initialState: Task[] = [
  {
    id: uuid(),
    description: ' React',
    isComplete: true,
  },
  {
    id: uuid(),
    description: ' Redux',
    isComplete: true,
  },
  {
    id: uuid(),
    description: ' Redux-ToolKit',
    isComplete: false,
  },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    create: {
      reducer: (state, action: PayloadAction<{ id: string;  description: string; isComplete: boolean;  }>  ) => {
    
        state.push(action.payload);
      },
      prepare: ({ description }: { description: string }) => ({
        payload: {
          id: uuid(),
          description,
          isComplete: false,
        },
      }),
    },
    edit: ( state, action: PayloadAction<{ id: string; description: string }>  ) => {
      const { payload } = action;
      const task = state.find((task) => task.id === payload.id);
      if (task) task.description = payload.description;
    },
    toggle: ( state,  action: PayloadAction<{ id: string; isComplete: boolean }> ) => {
      const { payload } = action;
      const task = state.find((task) => task.id === payload.id);
      if (task) task.isComplete = payload.isComplete;
    },
    delete: (state, action: PayloadAction<{ id: string }>) => {
      const { payload } = action;
    // return  state.filter((task) => task.id !== payload.id);  is more easy

     const index = state.findIndex((task) => task.id === payload.id);
     if (index !== -1) state.splice(index, 1);
     
    },
  },
});

const selectedTaskSlice = createSlice({
  name: 'selectedTask',
  initialState: null as string | null,
  reducers: {
    select: (state, action: PayloadAction<{ id: string }>) => action.payload.id,
  },
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {},
  extraReducers: {
    [tasksSlice.actions.create.type]: (state) => state + 1,
    [tasksSlice.actions.edit.type]: (state) => state + 1,
    [tasksSlice.actions.toggle.type]: (state) => state + 1,
    [tasksSlice.actions.delete.type]: (state) => state + 1,
  },
});

export const {
  create: createTaskActionCreator,
  delete: deleteTaskActionCreator,
  edit: editTaskActionCreator,
  toggle: toggleTaskActionCreator,
} = tasksSlice.actions;

export const { select: selectTaskActionCreator } = selectedTaskSlice.actions;

export  const reducerAction = {
  tasks: tasksSlice,
  selectedTask: selectedTaskSlice,
  counter: counterSlice,
};


