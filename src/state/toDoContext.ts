import { createContext, useContext } from "react";
import { initToDoState } from "./toDoReducer";

const ToDoContext = createContext(initToDoState);
export const useToDoContext = () => {
  return useContext(ToDoContext);
};

export default ToDoContext;
