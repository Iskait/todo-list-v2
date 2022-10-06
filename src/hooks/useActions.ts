import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

import { filterActions } from "../store/slices/filterSlice";

import { taskActions } from "../store/slices/taskSlice";

import { todoActions } from "../store/slices/todoSlice";

const actions = {
  ...filterActions,
  ...taskActions,
  ...todoActions,
}
const useAppDispatch: () => AppDispatch = useDispatch;

const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
}

export default useActions;
