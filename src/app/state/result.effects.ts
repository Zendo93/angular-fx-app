import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ResultService} from "../services/result.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {getResult, setResult} from "./result.actions";
import {Injectable} from "@angular/core";

@Injectable()
export class ResultEffects {

  getResult$ = createEffect(() => this.actions$.pipe(
      ofType(getResult),
      mergeMap(() => this.resultService.getResult("assets/fx.json")
        .pipe(
          map(result => setResult({result})),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private resultService: ResultService
  ) {}
}
