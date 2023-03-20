// import { IBitcoinItemDetail } from "./BitcoinItemDetail";
import { IBitcoinItem } from "./BitcoinItem";
import { IBitcoinUpdateTime } from "./BitcoinUpdateTime";

export interface IBitcoinData {
  time: IBitcoinUpdateTime,
  disclaimer: string,
  chartName: string,
  bpi: IBitcoinItem

}