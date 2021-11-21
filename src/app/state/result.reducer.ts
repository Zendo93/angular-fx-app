import {IResult} from "../types";
import {createReducer, on} from "@ngrx/store";
import {setResult} from "./result.actions";

const initialState: IResult = {} as IResult;

export const resultReducer = createReducer(
  initialState,
  on(setResult, (state: IResult, {result}) => ({...state, result}))
);
