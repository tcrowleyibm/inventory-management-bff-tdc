import { StockItemModel } from "../models";

export abstract class StockItemsApi {
  abstract async listStockItems(): Promise<StockItemModel[]>;
}
