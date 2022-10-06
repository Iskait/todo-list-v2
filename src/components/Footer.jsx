import { useDispatch } from 'react-redux';
import { deleteDoneTasks, deleteAllTasks } from '../redux/slices/todoSlice';
function Footer() {
  const dispatch = useDispatch();
  return (
    <div className="footer">
        <div className="footer__container _container">
            <div className="footer__row">
                <button 
                onClick={() => dispatch(deleteDoneTasks())}
                className="footer__btn done">
                Delete done tasks
                </button>
                <button 
                onClick={() => dispatch(deleteAllTasks())} 
                className="footer__btn all">
                Delete all tasks
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer;