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
