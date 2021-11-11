import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ResultService} from "../services/result.service";
import {IResult} from "../types";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnChanges {
  @Input() searchTerm: string = "";
  result: IResult = {} as IResult;
  temp: IResult = {} as IResult;

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.getResult("assets/fx.json")
      .subscribe((result: IResult) => {
        this.result = Object.create(result);
        this.temp = Object.create(result);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.result = Object.create(this.temp);
    if (changes["searchTerm"].currentValue) {
      this.result.fx = this.result.fx.filter(fx => fx.currency.toLowerCase().startsWith(changes["searchTerm"].currentValue.toLowerCase()));
    }
  }
}
