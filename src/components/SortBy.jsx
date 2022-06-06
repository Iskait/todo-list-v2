import { useDispatch, useSelector } from 'react-redux';
import { showAll, showDone, showTodo } from '../redux/slices/filterSlice';
import { useRef, useEffect } from 'react';

function SortBy() {
  const dispatch = useDispatch();
  const filterRef = useRef();
  const filter = useSelector(state=>state.filter);
  useEffect(() => {
    [...filterRef.current.children].forEach(elem => {
      elem.classList.contains(filter) ? 
      elem.classList.add('active') :
      elem.classList.remove('active'); 
    });
  })
  return (
    <div className="sort">
        <div className="sort__container _container">
            <div className="sort__column">
                <div className="sort__title">Sort by</div>
                <div ref={filterRef} className="sort__buttons">
                    <button 
                    className="sort__btn all"
                    onClick={() => dispatch(showAll())}>
                    All
                    </button>
                    <button 
                    className="sort__btn done"
                    onClick={() => dispatch(showDone())}>
                    Done
                    </button>
                    <button 
                    className="sort__btn todo"
                    onClick={() => dispatch(showTodo())}>
                    Todo
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SortBy;