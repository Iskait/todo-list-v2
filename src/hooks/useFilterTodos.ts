import useAppSelector from "./useAppSelector";
import { ITodo } from "../store/slices/todoSlice";
export const useFilterTodos = () => {
  const todos = useAppSelector((state) => state.todolist.todos);
  const filter = useAppSelector((state) => state.filter);
  const fn = (todo: ITodo) =>
    filter === "todo"
      ? !todo.completed
      : filter === "done"
      ? todo.completed
      : todo;
  return [...todos.filter(fn)].reverse();
};
