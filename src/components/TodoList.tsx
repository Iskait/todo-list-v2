import Todo from "./Todo";
import { useRef } from "react";
import { useFilterTodos } from "../hooks/useFilterTodos";

const TodoList: React.FC = () => {
  const columnRef = useRef<HTMLUListElement>(null);
  const todos = useFilterTodos();
  return (
    <div className="space-y-1 flex flex-col">
      <h2 className="text-right font-bold">Todos left: {todos.length}</h2>
      <ul className="todo-list-column space-y-5" ref={columnRef}>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} columnRef={columnRef} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;