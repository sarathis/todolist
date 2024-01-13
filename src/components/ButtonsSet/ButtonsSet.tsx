import "./ButtonsSet.css";
import { IButtonsSetProps } from "../../Types";

const ButtonsSet = (props: IButtonsSetProps) => {
  const { onComplete, onDelete } = props;

  return (
    <div className="buttonContainer">
      <button onClick={onComplete}>Complete</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ButtonsSet;
