import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
  added: boolean;
}

interface IEditTodo {
  id: string;
  text: string;
}

const todoSlise = createSlice({
  name: "todolist",
  initialState: {
    todos: [] as ITodo[],
  },
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
        added: false,
      });
    },
    alreadyAdded(state, action: PayloadAction<string>) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo && (todo.added = !todo.added);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoComplete(state, action: PayloadAction<string>) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo && (todo.completed = !todo.completed);
    },
    deleteDoneTasks(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    deleteAllTasks(state) {
      state.todos = [];
    },
    editTodo(state, action: PayloadAction<IEditTodo>) {
      const edit = state.todos.find((todo) => todo.id === action.payload.id);
      edit && (edit.text = action.payload.text);
    },
  },
});

export const todoActions = todoSlise.actions;

export default todoSlise.reducer;
