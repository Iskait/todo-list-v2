import { useAppSelector } from "./reduxHooks";
import { ITodo } from "../store/slices/todoSlice";
export const useFilterTodos = () => {
  const todos = useAppSelector(state => state.todolist.todos);
  const filter = useAppSelector(state => state.filter);
  const fn =
    filter === "todo"
      ? (todo: ITodo) => !todo.completed
      : filter === "done"
      ? (todo: ITodo) => todo.completed
      : (todo: ITodo) => todo;
  return [...todos.filter(fn)].reverse();
};
