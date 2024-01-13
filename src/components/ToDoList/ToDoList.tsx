import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { IToDoListProps } from "../../Types";
import ButtonsSet from "../ButtonsSet/ButtonsSet";
import ToDoItem from "../ToDoItem/ToDoItem";
import { useToDoContext } from "../../state/toDoContext";

const ToDoList = (props: IToDoListProps) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { source } = props;
  const state = useToDoContext();
  useEffect(() => {}, [state.items]);

  const itemChecked = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      setSelectedIds([...selectedIds, Number(event.target.value)]);
      props.setSelectedIds([...selectedIds, Number(event.target.value)]);
    }
    if (!event.target.checked) {
      setSelectedIds(
        selectedIds.filter((item) => {
          return item !== Number(event.target.value);
        })
      );
    }
  };

  return (
    <div>
      {source.map((item) => {
        return (
          <div>
            <ToDoItem
              itemChecked={itemChecked}
              id={item.id}
              completed={item.completed}
              deleted={item.deleted}
              name={item.name}
              key={item.id}
            />
          </div>
        );
      })}
      {selectedIds.length > 0 && (
        <ButtonsSet
          data-testid="buttons-set-comp"
          onComplete={props.onComplete}
          onDelete={props.onDelete}
        />
      )}
    </div>
  );
};

export default ToDoList;
