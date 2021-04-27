import { ActionTypes } from "../actions/type";
import { bookState } from "../types";

export const initialState: bookState = {
  books: [],
};

const bookReducer = (
  state: bookState = initialState,
  action: any
): bookState => {
  switch (action.type) {
    case ActionTypes.LIST_BOOK:
      return {
        books: action.payload,
      };
    case ActionTypes.ADD_BOOKS:
      return {
        books: action.payload,
      };

    default:
      return state;
  }
};

export default bookReducer;
