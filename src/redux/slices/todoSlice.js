import { createSlice, nanoid } from "@reduxjs/toolkit";

function changeArrays(state) {
    state.done = state.all.filter(task=>task.completed);
    state.todo = state.all.filter(task=>!task.completed);
}

const todoSlise = createSlice({
    name: 'todolist',
    initialState: {
        all: [],
        todo: [],
        done: [],
    },
    reducers: {
        addTodo(state, action) {
            state.all.push({
                id: nanoid(),
                text: action.payload.text,
                completed: false,
                added: false,
            })
            changeArrays(state)
        },
        alreadyAdded(state, action) {
            const todo = state.all.find(todo=>todo.id === action.payload.id);
            todo.added = !todo.added;
        },
        removeTodo(state, action) {
            state.all = state.all.filter(todo=>todo.id !== action.payload.id);
            changeArrays(state)
        },
        toggleTodoComplete(state, action) {
            const toggleTodo = state.all.find((todo => todo.id === action.payload.id));
            toggleTodo.completed = !toggleTodo.completed;
            changeArrays(state);
        },
        deleteDoneTasks(state) {
            state.all = state.all.filter(todo=>!todo.completed);
            changeArrays(state)
        },
        deleteAllTasks(state) {
            state.all.length = 0;
            changeArrays(state)
        },
        editTodo(state, action) {
            const edit = state.all.find(todo=>todo.id === action.payload.id);
            edit.text = action.payload.text;
            changeArrays(state)
        }
    },
})

export const {
    addTodo,
    alreadyAdded, 
    removeTodo, 
    toggleTodoComplete, 
    deleteDoneTasks,
    deleteAllTasks,
    editTodo} = todoSlise.actions;

export default todoSlise.reducer;