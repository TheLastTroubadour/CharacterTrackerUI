import {QuestItem} from "./quest-item";
import {Character} from "./character";

export interface Epic15Quest {

  id: bigint;
  completed: boolean

  firstStone: QuestItem;
  secondStone: QuestItem;
  thirdStone: QuestItem;
  fourthStone: QuestItem;
  flawlessUnicornHeart: QuestItem;
  perfectUnicornHeart: QuestItem;
  totalUnicornHeart: QuestItem;
  absurdUnicornHeart: QuestItem;

  eyeOfTheTerrorantula: QuestItem;
  eyeOfTheSpectre: QuestItem;
  eyeOfTheVampire: QuestItem;
  eyeOfTheGhost: QuestItem;

  bloodOfTheDragon: QuestItem;

  character: Character;

}
