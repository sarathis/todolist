import { useReducer, useEffect, useState } from "react";
import ToDoList from "../ToDoList/ToDoList";
import NewToDoItem from "../NewToDoItem/NewToDoItem";
import { initToDoState, toDoReducer } from "../../state/toDoReducer";
import ToDoContext from "../../state/toDoContext"
import { ADD_NEW_ITEM, SET_ITEM_COMPLETED, SET_ITEM_DELETED } from "../../state/constants";

const Home = () => {
  const [state, dispatch] = useReducer(toDoReducer, initToDoState);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const toDoState = {
    state,
    dispatch
  }
  useEffect(() => {}, []);

  const generateId = () => {
    return state.items.length > 0
      ? state.items[state.items.length - 1].id + 1
      : 1;
  };

  const setItemName = (itemName: string | undefined) => {
    dispatch({
      type: ADD_NEW_ITEM,
      payload: { id: generateId(), name: itemName,completed:false,deleted:false },
    });
  };

  const onComplete = () => {

    selectedIds.forEach((id)=>{
        dispatch({type:SET_ITEM_COMPLETED,payload:id})
    })
  };

  const onDelete = () => {
    selectedIds.forEach((id)=>{
      dispatch({type:SET_ITEM_DELETED,payload:id})
  })

  };

  return (
    <div>
       <ToDoContext.Provider value={toDoState.state} >
        <NewToDoItem setItemName={setItemName} />
        <ToDoList source={state.items} onComplete={onComplete} onDelete={onDelete} setSelectedIds={setSelectedIds}/>
       </ToDoContext.Provider>
     
    </div>
  );
};

export default Home;
