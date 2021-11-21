import {Search} from "./search.model";
import {IResult} from "../types";

export interface AppState {
  search: Search;
  result: IResult
}
