import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import taskReducer from "./slices/taskSlice";
import filterReducer from "./slices/filterSlice";
const store = configureStore({
  reducer: {
    todolist: todoReducer,
    task: taskReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
