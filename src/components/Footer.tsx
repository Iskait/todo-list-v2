import { useAppDispatch } from "../hooks/reduxHooks";
import { deleteDoneTasks, deleteAllTasks } from "../store/slices/todoSlice";
const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <footer className="container flex justify-between py-4">
      <button
        onClick={() => dispatch(deleteDoneTasks())}
        className="footer-btn"
      >
        Delete done tasks
      </button>
      <button onClick={() => dispatch(deleteAllTasks())} className="footer-btn">
        Delete all tasks
      </button>
    </footer>
  );
}

export default Footer;
