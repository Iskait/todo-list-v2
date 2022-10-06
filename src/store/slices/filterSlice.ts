import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "all" as string,
  reducers: {
    showAll: (state) => state = "all",
    showTodo: (state) => state = "todo",
    showDone: (state) => state = "done",
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
