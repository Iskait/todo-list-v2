import { useSelector, useDispatch } from "react-redux";
import { toggleTodoComplete, removeTodo } from "../redux/slices/todoSlice";
import Todo from "./Todo";

function TodoList() {
  const todos = useSelector((state) => state.todolist[state.filter]);
  const count = useSelector((state) => state.todolist.todo).length;
  const dispatch = useDispatch();
  const handleCompleteTask = (id) => {
    dispatch(toggleTodoComplete({ id }));
  };
  const handleDelete = (id) => {
    dispatch(removeTodo({ id }));
  };
  return (
    <div className="todolist">
      <div className="todolist__container _container">
        <h2 className="todolist__title">Todos left: {count}</h2>
        <ul className="todolist__column">
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleCompleteTask={handleCompleteTask}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
