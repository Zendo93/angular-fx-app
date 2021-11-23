import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IForeignExchange} from "../types";
import {Search} from "../model/search.model";
import {AppState} from "../model/state.model";

export const selectedSearchFeature = createFeatureSelector<Search>('search');
export const selectedResultFeature = createFeatureSelector<AppState>('result');

export const selectResult = createSelector(
  selectedSearchFeature,
  selectedResultFeature,
  (selectedSearchFeature: Search, selectedResultFeature: AppState) => {
    let fx: IForeignExchange[] = [];
    if(selectedResultFeature.result && selectedSearchFeature.term) {
      fx = selectedResultFeature.result.fx.filter(fx => fx.currency.toLowerCase().startsWith(selectedSearchFeature.term.toLowerCase()));
      return {...selectedResultFeature.result, fx: fx};
    }
    return selectedResultFeature?.result;
  }
);
