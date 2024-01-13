import {useRef} from "react";
import "./NewToDoItem.css";
import { INewToDoItemProps } from "../../Types";

const NewToDoItem = (props:INewToDoItemProps) => {
  const input=useRef<HTMLInputElement>(null);
  const addNew = () => {
    props.setItemName(input.current?.value);
    console.log(input.current?.value)
  };

  return (
    <div className="container">
      <h2 data-testid="header">Add New To Do Item</h2>
      <input ref={input} className="input-to-do" />
      <button onClick={addNew}>Add</button>
    </div>
  );
};

export default NewToDoItem;
