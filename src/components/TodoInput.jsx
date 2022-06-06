import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';
import { addTask, clearTask } from '../redux/slices/taskSlice';

function TodoInput() {
    const dispatch = useDispatch();
    const text = useSelector(state=>state.task);    
    const inputRef = useRef();

    const handleAdd = () => {
        if (!text.trim().length) return;
        dispatch(addTodo({text}));
        handleClear();
    }
    const handleClear = () => {
        dispatch(clearTask());
        inputRef.current.focus();
    }
    const handleKeyDown = (e) => { 
        return e.key === 'Enter' ? handleAdd() : null;
    }

  return (
    <div className="input">
        <div className="input__container _container">
            <div className="input__column">
                <div className="input__add-todos">
                    <input
                    ref={inputRef} 
                    type="text" 
                    placeholder='add new task...' 
                    value={text}
                    onChange={(e) => dispatch(addTask({value: e.target.value}))}
                    onKeyDown={(e) => handleKeyDown(e)}
                    />
                    {text.length > 0 && 
                    <button
                    className="input__clear"
                    onClick={handleClear}>
                    &#10006;
                    </button>}
                </div>
                <button 
                onClick={handleAdd}
                className="input__btn">
                    Add new task
                </button>
            </div>
        </div>
    </div>
  )
}

export default TodoInput