import {useRef} from "react";
import "./NewToDoItem.css";
import { INewToDoItemProps } from "../../Types";

const NewToDoItem = (props:INewToDoItemProps) => {
  const input=useRef<HTMLInputElement>(null);
  const addNew = () => {
    props.setItemName(input.current?.value);
  };

  return (
    <div className="container" data-testid="comp-new-to-do-item">
      <h2 data-testid="header">Add New To Do Item</h2>
      <input ref={input} data-testid="input-to-do" className="input-to-do" />
      <button data-testid="btn-add"  className="button-to-do" onClick={addNew}>Add</button>
      <span data-testid="lbl-total">Total Items:{props.total}</span>
      
    </div>
  );
};

export default NewToDoItem;
