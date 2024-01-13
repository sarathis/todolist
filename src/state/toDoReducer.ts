import { IToDoState } from "../Types";
import {
  ADD_NEW_ITEM,
  SET_ITEM_COMPLETED,
  SET_ITEM_DELETED,
} from "./constants";

export const initToDoState: IToDoState = {
  items: [],
};

export const toDoReducer = (state = initToDoState, action: any) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return { ...state, items: [...state.items, action.payload] };

      break;
    case SET_ITEM_COMPLETED:
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id == action.payload) {
              item.completed = true;
            }
            return item;
          }),
        ],
      };

      break;
    case SET_ITEM_DELETED:
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id == action.payload) {
              item.deleted = true;
            }
            return item;
          }),
        ],
      };

      break;

    default:
      return state;
      break;
  }
};
