import {createReducer, on} from "@ngrx/store";
import {setSearchTerm} from "./search.actions";
import {Search} from "../model/search.model";

const initialState: Search  = {
  term: ""
};

export const searchReducer = createReducer(
  initialState,
  on(setSearchTerm, (state: Search, {searchTerm}) => ({...state, term: searchTerm}))
);
