import { initialState } from "../reducers/bookReducer";
import { createSelector } from "reselect";
import { bookData, bookState, globalState } from "../types";

const selectBookDomain = (bkstate: globalState): bookState =>
  bkstate.booksStateFE || initialState;

const makeSelectBooks = () =>
  createSelector(selectBookDomain, (booksdata: bookState) =>
    booksdata && "books" in booksdata ? booksdata.books : []
  );

export { makeSelectBooks, selectBookDomain };
