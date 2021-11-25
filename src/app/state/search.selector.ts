import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Search} from "../model/search.model";
import {selectRouteParams} from "./router.selectors";

const selectSearch = createFeatureSelector<Search>('search');

export const selectSearchTerm = createSelector(
  selectSearch,
  selectRouteParams,
  (state, params) => params && params["term"] ? params["term"] : state.term
);
