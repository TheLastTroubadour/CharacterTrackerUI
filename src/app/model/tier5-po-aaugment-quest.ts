import {QuestItem} from "./quest-item";
import {Character} from "./character";

export interface Tier5PoAAugmentQuest {

  id: bigint;
  questItem: QuestItem;
  windParchment: QuestItem;
  containerOfMist: QuestItem;
  character: Character;

}
