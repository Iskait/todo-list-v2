import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: '',
    reducers: {
        addTask: (state, action) => state = action.payload.value,
        clearTask: (state) => state = '',
    }
})



export const { addTask, clearTask } = taskSlice.actions;

export default taskSlice.reducer;