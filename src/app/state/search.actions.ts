import {createAction, props} from "@ngrx/store";

export const setSearchTerm = createAction(
  '[Search Term] Set Search Term',
  props<{ searchTerm: string }>()
);
