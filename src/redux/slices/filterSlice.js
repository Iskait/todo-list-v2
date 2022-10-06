import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'all',
    reducers: {
        showAll: (state) => state = 'all',
        showTodo: (state) => state = 'todo',
        showDone: (state) => state = 'done',
    }
})

export const { showAll, showTodo, showDone } = filterSlice.actions;

export default filterSlice.reducer;