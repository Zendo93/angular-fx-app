import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Search} from "../model/search.model";

const selectSearch = createFeatureSelector<Search>('search');

export const selectSearchTerm = createSelector(
  selectSearch,
  (state) => state.term
);
