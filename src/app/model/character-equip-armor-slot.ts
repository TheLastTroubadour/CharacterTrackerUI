import {EquipSlot} from "./equip-slot";
import {Character} from "./character";
import {Armor} from "./armor";
import {Augmentation} from "./augmentation";

export interface CharacterEquipArmorSlot {

  id: number
  equipSlot: EquipSlot
  character: Character
  armor: Armor
  aug1: Augmentation
  aug2: Augmentation

}
