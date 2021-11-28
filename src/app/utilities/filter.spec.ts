import {IForeignExchange} from "../types";
import {filterResults} from "./filter";
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

describe("Testing filter utility", function() {
  it('filterResult()', function() {
    let results: IForeignExchange[] = [
      {
        currency: "USD",
        precision: 0,
        nameI18N: "USD",
        exchangeRate: {} as IExchangeRate,
        banknoteRate: {} as IBankNoteRate,
        flags: []
      },
      {
        currency: "US",
        precision: 0,
        nameI18N: "US",
        exchangeRate: {} as IExchangeRate,
        banknoteRate: {} as IBankNoteRate,
        flags: []
      },
      {
        currency: "test",
        precision: 0,
        nameI18N: "test",
        exchangeRate: {} as IExchangeRate,
        banknoteRate: {} as IBankNoteRate,
        flags: []
      }
    ];
    let expectedResults: IForeignExchange[] = [
      {
        currency: "USD",
        precision: 0,
        nameI18N: "USD",
        exchangeRate: {} as IExchangeRate,
        banknoteRate: {} as IBankNoteRate,
        flags: []
      },
      {
        currency: "US",
        precision: 0,
        nameI18N: "US",
        exchangeRate: {} as IExchangeRate,
        banknoteRate: {} as IBankNoteRate,
        flags: []
      }
    ];
    let searchTerm: string = "us";

    expect(filterResults(results,searchTerm)).toEqual(expectedResults);
  });
});
