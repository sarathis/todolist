import { IToDoItemProps } from "../../Types";
import "./ToDoItem.css";

const ToDoItem = (props: IToDoItemProps) => {
  const { id, completed, deleted, itemChecked, name } = props;
  return (<>
  {!deleted && (
        <div className="row" data-testid="comp-to-do-list-item">
          <div>
            <input value={id} type="checkbox" onChange={itemChecked}  data-testid="check-box-to-do-item"/>
          </div>
          <div data-testid="data-to-do-item-id">{id}</div>
          <div data-testid="data-to-do-item-name">{name}</div>
          <div data-testid="data-to-do-item-completed"><b>Status:</b>{completed ? "Completed" : "Pending"}</div>
        </div>
      )}
  </>
      
  );
};

export default ToDoItem;
