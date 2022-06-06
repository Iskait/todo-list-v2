import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import taskReducer from './slices/taskSlice';
import filterReducer from './slices/filterSlice';
export const store = configureStore({
    reducer: {
        todolist: todoReducer,
        task: taskReducer,
        filter: filterReducer,
    }
})
