import { useRef } from "react";
import useActions from "../hooks/useActions";
import useAppSelector from "../hooks/useAppSelector";

const TodoInput: React.FC = () => {
  const text = useAppSelector((state) => state.task);
  const todo = useAppSelector((state) =>
    state.todolist.todos.find((todo) => todo.text === text)
  );
  const { addTodo, alreadyAdded, addTask, clearTask } = useActions();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAdd = () => {
    if (!text.trim().length) {
      return;
    } else if (todo) {
      alreadyAdded(todo.id);
      setTimeout(() => alreadyAdded(todo.id), 1000);
      handleClear();
      return;
    }
    addTodo(text);
    handleClear();
  };

  const handleClear = () => {
    clearTask();
    inputRef.current!.focus();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === "Enter" ? handleAdd() : null;
  };

  return (
    <div className="flex flex-col space-y-5">
      <div className="relative border border-l-zinc-200 rounded flex items-center">
        <input
          className="py-3 pl-3 pr-10 w-full text-xl focus:outline-none"
          ref={inputRef}
          type="text"
          placeholder="add new task..."
          value={text}
          onChange={(e) => addTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {text.length > 0 && (
          <button
            className="absolute right-0 px-2 border-l h-full"
            onClick={handleClear}
          >
            &#10006;
          </button>
        )}
      </div>
      <button
        onClick={handleAdd}
        className="p-3 bg-sky-600 rounded-md text-white"
      >
        Add new task
      </button>
    </div>
  );
}

export default TodoInput;
