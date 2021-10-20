import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface IResult {
  institute: number;
  lastUpdated: string;
  comparisonDate: string;
  baseCurrency: string;
  fx: Array<IForeignExchange>;
}

export interface IForeignExchange {
  currency: string;
  precision: number;
  nameI18N: string;
  exchangeRate: IExchangeRate;
  banknoteRate: IBankNoteRate;
  flags: Array<string>;
}

interface IExchangeRate {
  buy: number;
  middle: number;
  sell: number;
  indicator: number;
  lastModified: string;
}

interface IBankNoteRate {
  buy: number;
  middle: number;
  sell: number;
  indicator: number;
  lastModified: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  getResult(url: string): Observable<IResult> {
    return this.http.get<IResult>(url);
  }
}
