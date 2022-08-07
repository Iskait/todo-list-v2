import { useState, useRef, useEffect } from "react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { editTodo, toggleTodoComplete, removeTodo, ITodo } from "../store/slices/todoSlice";

interface ITodoProps {
  todo: ITodo;
  columnRef: React.RefObject<HTMLUListElement>;
}

const Todo: React.FC<ITodoProps> = ({ todo, columnRef }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);
  const rowRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleCompleteTask = (id: string) => {
    dispatch(toggleTodoComplete(id));
  };
  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };
  useEffect(() => {
    if (todo.added) {
      rowRef.current!.classList.add("already-add");
      columnRef.current!.scrollTo({
        top: rowRef.current!.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth",
      });
    } else {
      rowRef.current!.classList.remove("already-add");
    }
  }, [todo.added, columnRef]);

  const handleBlur = () => {
    setTimeout(handleEdit, 200);
  };

  const toggleEdit = () => {
    setEdit(true);
  };

  const handleEdit = () => {
    dispatch(editTodo({ id: todo.id, text }));
    setEdit(false);
  };

  return (
    <div
      ref={rowRef}
      className={`flex items-center p-5 rounded-md border border-x-gray-300
      ${todo.completed && "opacity-40"}`}
    >
      {edit ? (
        <input
          autoFocus={true}
          onBlur={handleBlur}
          className="flex-auto break-all mr-5 p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <li
          className={`flex-auto break-all mr-5
          ${todo.completed ? "line-through" : ""} 
          ${todo.completed ? "text-red-600" : ""}`}
        >
          {todo.text}
        </li>
      )}
      <div className="flex space-x-3">
        <input
          type="checkbox"
          className="todo-list-btn bg-send cursor-pointer"
          defaultChecked={todo.completed}
          onClick={() => handleCompleteTask(todo.id)}
        />
        {edit ? (
          <button onClick={handleEdit} className="todo-list-btn bg-send" />
        ) : (
          <button onClick={toggleEdit} className="todo-list-btn bg-edit" />
        )}
        <button
          onClick={() => handleDelete(todo.id)}
          className="todo-list-btn bg-delete"
        />
      </div>
    </div>
  );
}

export default Todo;
