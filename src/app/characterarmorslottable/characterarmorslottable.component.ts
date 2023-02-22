import {Component, OnInit} from '@angular/core';
import {CharacterEquipArmorSlotService} from "../service/character-equip-armor-slot.service";
import {CharacterEquipArmorSlot} from "../model/character-equip-armor-slot";
import {CharacterClasses} from "../model/character-classes";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {relative} from "@angular/compiler-cli";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {EquipSlot} from "../model/equip-slot";

@Component({
  selector: 'app-characterarmorslottable',
  templateUrl: './characterarmorslottable.component.html',
  styleUrls: ['./characterarmorslottable.component.css']
})



export class CharacterarmorslottableComponent implements OnInit {

  characterArmorSlotSubscription: Subscription | undefined;
  characterArmorSlots: CharacterEquipArmorSlot[] = [];
  characterClasses = Object.entries(CharacterClasses).map(([shortName, obj]) => ({shortName, obj}));
  armorSlots = Object.keys(EquipSlot).filter(v => isNaN(Number(v)));

  slotCheckBox: any[] = [];
  classCheckbox: any[] = [];
  plateCheckbox: boolean = false;
  leatherCheckbox: boolean = false;
  chainCheckbox: boolean = false;
  silkCheckbox: boolean = false;
  httpParams: HttpParams = new HttpParams();

  constructor(private route: ActivatedRoute,
              private equipSlotService: CharacterEquipArmorSlotService,
              private router: Router) {

  }

  ngOnInit(): void {
    for (const entry of this.characterClasses) {
      let shortName: string = entry.shortName;
      let longName: string = entry.obj.display;
      let armorType: string = entry.obj.armorType;

      this.classCheckbox.push({longName: longName, value: shortName, armorType: armorType, checked: false});
    }

    for(const entry in this.armorSlots) {
      this.slotCheckBox.push({slotName: EquipSlot[entry], checked: false, value:entry})
    }

    this.route.queryParams.subscribe({
      next: (x => {
        if(x['slots'] != null) {
          this.httpParams = this.httpParams.set('slots', x['slots']);
        }
        if(x['classes'] != null ){
          this.httpParams = this.httpParams.set('classes', x['classes']);
        }
      }),
      error: (x => console.log('Error', x)),
    });

    this.getCharacterListFromParams();
  }

  selectPlate() {
    this.flipCLassBasedOffArmorType(this.plateCheckbox, "Plate");
  }

  selectChain() {
    this.flipCLassBasedOffArmorType(this.chainCheckbox, "Chain");
  }

  selectLeather() {
    this.flipCLassBasedOffArmorType(this.leatherCheckbox, "Leather");
  }

  selectSilk() {
    this.flipCLassBasedOffArmorType(this.silkCheckbox, "Silk");
  }

  search() {
    let checkedClassesArray: String[] = [];
    let checkedSlotsArray: String[] = [];
    this.classCheckbox.filter(v => v.checked).forEach(v => checkedClassesArray.push(v.longName));
    this.classCheckbox.forEach(v => v.checked = false);
    this.slotCheckBox.filter((v => v.checked)).forEach(v => checkedSlotsArray.push(v.slotName));
    this.slotCheckBox.forEach(v => v.checked = false);
    this.plateCheckbox = false;
    this.chainCheckbox = false;
    this.silkCheckbox = false;
    this.leatherCheckbox = false;
    this.router.navigate(['/character-armor'], {relativeTo: this.route, queryParams: {classes: checkedClassesArray, slots: checkedSlotsArray}}).then(() => {
      this.getCharacterListFromParams()
    });
  }

  getCharacterListFromParams(){
    this.characterArmorSlotSubscription = this.equipSlotService.getAllArmorEquipSlotsByClassAndSlot(this.httpParams)
      .subscribe({
          next: value => {
            this.characterArmorSlots = value;
          },
          error: x => console.log('Error', x),
        }
      );
  }

  private flipCLassBasedOffArmorType(value: boolean, armorType: String){
    this.classCheckbox.filter(v => v.armorType === armorType).forEach(v => v.checked = value);
  }

}
