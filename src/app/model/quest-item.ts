import {Item} from "./item";

export interface QuestItem {

  id: bigint;
  item: Item;
  inInventory: boolean;
}
