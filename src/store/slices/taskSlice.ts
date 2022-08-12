import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: "" as string,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => state = action.payload,
    clearTask: (state) => state = "",
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice.reducer;
