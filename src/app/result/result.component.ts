import { Component, OnInit } from '@angular/core';
import {ResultService} from "../services/result.service";
import {IResult} from "../types";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result: IResult = {} as IResult;

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.getResult("assets/fx.json")
      .subscribe((result: IResult) => this.result = result);
  }

}
