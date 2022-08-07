import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { showAll, showDone, showTodo } from "../store/slices/filterSlice";
import { useRef, useEffect } from "react";

const SortBy: React.FC = () => {
  const dispatch = useAppDispatch();
  const filterRef = useRef<HTMLDivElement>(null);
  const filter = useAppSelector((state) => state.filter);
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
        <button className="btn-sorted all" onClick={() => dispatch(showAll())}>
          All
        </button>
        <button
          className="btn-sorted done"
          onClick={() => dispatch(showDone())}
        >
          Done
        </button>
        <button
          className="btn-sorted todo"
          onClick={() => dispatch(showTodo())}
        >
          Todo
        </button>
      </div>
    </div>
  );
};

export default SortBy;
