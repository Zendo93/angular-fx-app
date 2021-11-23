import {Component, OnInit} from '@angular/core';
import {IResult} from "../types";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getResult} from "../state/result.actions";
import {selectResult} from "../state/result.selector";
import {AppState} from "../model/state.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result$: Observable<IResult> = this.store.select(selectResult);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getResult());
  }
}
