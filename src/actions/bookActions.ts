import { getAllBooks } from "../services/bookService";
import { bookData } from "../types";
import { ActionTypes } from "./type";

export const addBook = (payload: bookData) => {
  return {
    type: ActionTypes.ADD_BOOK,
    payload,
  };
};

export const addBooks = (data:bookData[]) => {

  return {
    type: ActionTypes.ADD_BOOKS,
    payload: data,
  };
};

export const ListBook = (payload: bookData[]) => {
  return {
    type: ActionTypes.LIST_BOOK,
    payload,
  };
};
