import useActions from "../hooks/useActions";

const Footer: React.FC = () => {
  const { deleteDoneTasks, deleteAllTasks } = useActions();
  return (
    <footer className="container flex justify-between py-4">
      <button
        onClick={deleteDoneTasks}
        className="footer-btn"
      >
        Delete done tasks
      </button>
      <button onClick={deleteAllTasks} className="footer-btn">
        Delete all tasks
      </button>
    </footer>
  );
}

export default Footer;
