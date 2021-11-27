import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IForeignExchange} from "../types";
import {AppState} from "../model/state.model";
import {selectSearchTerm} from "./search.selector";

const selectedResultFeature = createFeatureSelector<AppState>('result');

export const selectResult = createSelector(
  selectedResultFeature,
  selectSearchTerm,
  (selectedResultFeature: AppState, term: string) => {
    let fx: IForeignExchange[] = [];
    if(selectedResultFeature.result && term) {
      fx = filterResults(selectedResultFeature.result.fx, term);
      return {...selectedResultFeature.result, fx: fx};
    }
    return selectedResultFeature.result;
  }
);

function filterResults(results: IForeignExchange[], searchTerm: string) {
  return results.filter(fx =>
    fx.currency.toLowerCase().startsWith(searchTerm.toLowerCase()));
}
