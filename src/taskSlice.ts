import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  name: string;
}

interface TaskState {
  tasks: Task[];
  completed: Task[];
  declined: Task[];
}

const initialState: TaskState = {
  tasks: [
    { id: 1, name: 'Walk the dog' },
    { id: 2, name: 'Clean the room' },
    { id: 3, name: 'Call restaurant' },
    { id: 4, name: 'Buy groceries' },
    { id: 5, name: 'Write email' },
    { id: 6, name: 'Pay bills' },
    { id: 7, name: 'Exercise' },
  ],
  completed: [],
  declined: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    completeTask(state, action: PayloadAction<number>) {
      const taskId = action.payload;
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        state.completed.push(task);
        state.tasks = state.tasks.filter(t => t.id !== taskId);
      }
    },
    declineTask(state, action: PayloadAction<number>) {
      const taskId = action.payload;
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        state.declined.push(task);
        state.tasks = state.tasks.filter(t => t.id !== taskId);
      }
    },
  },
});

export const { completeTask, declineTask } = taskSlice.actions;

export default taskSlice.reducer;
