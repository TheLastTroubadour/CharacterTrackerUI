import {QuestItem} from "./quest-item";
import {Character} from "./character";

export interface Tier5XegonyKeyQuest {
  id: bigint;
  mysticalEssenceOfDust: QuestItem;
  mysticalEssenceOfMist: QuestItem;
  mysticalEssenceOfSmoke: QuestItem;
  mysticalEssenceOfWind: QuestItem;

  character: Character;

}
