import { useRef, useEffect } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useActions from "../hooks/useActions";

const SortBy: React.FC = () => {
  const filter = useAppSelector((state) => state.filter);
  const { showAll, showDone, showTodo } = useActions();
  const filterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Array.from(filterRef.current!.children).forEach((elem) => {
      elem.classList.contains(filter)
        ? elem.classList.add("active")
        : elem.classList.remove("active");
    });
  });
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-center font-bold text-2xl">Sort by</h2>
      <div ref={filterRef} className="flex justify-between">
        <button className="btn-sorted all" onClick={showAll}>
          All
        </button>
        <button
          className="btn-sorted done"
          onClick={showDone}
        >
          Done
        </button>
        <button
          className="btn-sorted todo"
          onClick={showTodo}
        >
          Todo
        </button>
      </div>
    </div>
  );
};

export default SortBy;
