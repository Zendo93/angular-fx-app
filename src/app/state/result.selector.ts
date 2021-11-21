import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../model/state.model";

const select = createFeatureSelector<AppState>('result');

export const selectResult = createSelector(
  select,
  (state) => state.result
);
