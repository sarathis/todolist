import { IToDoItemProps } from "../../Types";
import "./ToDoItem.css";

const ToDoItem = (props: IToDoItemProps) => {
  const { id, completed, deleted, itemChecked, name } = props;
  return (
    <div>
      {!deleted && (
        <tr className="row">
          <td width="50">
            <input value={id} type="checkbox" onChange={itemChecked} />
          </td>
          <td width="100">{id}</td>
          <td width="300">{name}</td>
          <td width="200">{completed ? "Completed" : "Pending"}</td>
        </tr>
      )}
    </div>
  );
};

export default ToDoItem;
