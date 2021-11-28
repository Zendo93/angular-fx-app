import {IForeignExchange} from "../types";

export function filterResults(results: IForeignExchange[], searchTerm: string) {
  return results.filter(fx =>
    fx.currency.toLowerCase().startsWith(searchTerm.toLowerCase()));
}
