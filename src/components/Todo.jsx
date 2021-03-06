import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/slices/todoSlice";


function Todo({ todo, handleCompleteTask, handleDelete, columnRef }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);
  const inputRef = useRef();
  const rowRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    if (todo.added) {
      rowRef.current.classList.add('already-add');
      columnRef.current.scrollTo({
        top: rowRef.current.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth',
      })
    } else {
      rowRef.current.classList.remove('already-add');
    }
  }, [todo.added, columnRef])

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

  const liTask = (
    <li
      className="todolist__task"
      style={{ textDecoration: todo.completed ? "line-through" : "none",
               color: todo.completed ? 'rgba(210, 7, 7, 0.8)' : '#000'}}
    >
      {todo.text}
    </li>
  );
  const editTask = (
    <input
      ref={inputRef}
      autoFocus={true}
      onBlur={handleBlur}
      className="todolist__task"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );

  const editBtn = (
    <button onClick={handleEdit} className="todolist__btn send" />
  );

  const commonBtn = (
    <button onClick={toggleEdit} className="todolist__btn edit" />
  );

  return (
    <div
      ref={rowRef}
      className="todolist__row"
      style={{ opacity: todo.completed ? "0.5" : "1" }}
    >
      {edit ? editTask : liTask}
      <div className="todolist__buttons">
        <input
          type="checkbox"
          className="todolist__btn completed"
          defaultChecked={todo.completed}
          onClick={() => handleCompleteTask(todo.id)}
        />
        {edit ? editBtn : commonBtn}
        <button
          onClick={() => handleDelete(todo.id)}
          className="todolist__btn delete"
        ></button>
      </div>
    </div>
  );
}

export default Todo;
