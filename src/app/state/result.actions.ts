import {createAction, props} from "@ngrx/store";
import {IResult} from "../types";

export const setResult = createAction(
  '[Result] Set Result',
  props<{ result: IResult }>()
);

export const getResult = createAction(
  '[Result] Get Result'
)
