import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Search} from "../model/search.model";
import {AppState} from "../model/state.model";

const selectSearch = createFeatureSelector<AppState, Search>('search');

export const selectSearchTerm = createSelector(
  selectSearch,
  (state) => state.term
);
