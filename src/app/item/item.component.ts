import {Component, Input, OnInit} from '@angular/core';
import {IForeignExchange} from "../types";
import {getFlag} from "../utilities/flag";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()  item: IForeignExchange = {} as IForeignExchange;
  flag: string = "";

  constructor() { }

  ngOnInit(): void {
    this.flag = getFlag(this.item.currency.toLowerCase());
  }

}
