import "./ButtonsSet.css";
import { IButtonsSetProps } from "../../Types";

const ButtonsSet = (props: IButtonsSetProps) => {
  const { onComplete, onDelete } = props;

  return (
    <div className="buttonContainer" data-testid="comp-buttons">
      <button  data-testid="btn-complete" onClick={onComplete} className="button">Complete</button>
      <button data-testid="btn-delete" onClick={onDelete} className="button">Delete</button>
    </div>
  );
};

export default ButtonsSet;
