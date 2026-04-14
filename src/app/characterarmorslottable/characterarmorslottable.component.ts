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
import {ServerTypes} from "../model/server-types";

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
  serverTypes = Object.keys(ServerTypes).filter(v => isNaN(Number(v)));

  slotCheckBox: any[] = [];
  classCheckbox: any[] = [];
  serverCheckbox: any[] = [];
  meleeCheckBox: boolean = false;
  casterCheckBox: boolean = false;
  healerCheckBox: boolean = false;
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
      let fighterType: string = entry.obj.fighterType;

      this.classCheckbox.push({longName: longName, value: shortName, armorType: armorType, fighterType: fighterType, checked: false});
    }

    for(const entry in this.armorSlots) {
      this.slotCheckBox.push({slotName: EquipSlot[entry], checked: false, value: entry});
    }

    for(const entry in this.serverTypes) {
      this.serverCheckbox.push({name: ServerTypes[entry], checked: false, value: entry});
    }

    this.route.queryParams.subscribe({
      next: (x => {
        if(x['slots'] != null) {
          this.httpParams = this.httpParams.set('slots', x['slots']);
        }

        if(x['server'] != null) {
          this.httpParams = this.httpParams.set('server', x['server']);
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

  selectMelee(){
    this.flipClassBasedOffFighterType(this.meleeCheckBox, 'Melee');
  }

  selectCaster(){
    this.flipClassBasedOffFighterType(this.casterCheckBox, 'Caster');
  }

  selectHealer(){
    this.flipClassBasedOffFighterType(this.healerCheckBox, 'Healer');
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
    let checkedServerArray: String[] = [];
    this.classCheckbox.filter(v => v.checked).forEach(v => checkedClassesArray.push(v.longName));
    this.classCheckbox.forEach(v => v.checked = false);
    this.slotCheckBox.filter((v => v.checked)).forEach(v => checkedSlotsArray.push(v.slotName));
    this.slotCheckBox.forEach(v => v.checked = false);
    this.serverCheckbox.filter(v => v.checked).forEach(v => checkedServerArray.push(v.name));
    this.serverCheckbox.forEach(v => v.checked = false);
    this.meleeCheckBox = false;
    this.casterCheckBox = false;
    this.healerCheckBox = false;
    this.plateCheckbox = false;
    this.chainCheckbox = false;
    this.silkCheckbox = false;
    this.leatherCheckbox = false;
    this.router.navigate(['/character-armor'], {relativeTo: this.route, queryParams: {classes: checkedClassesArray, slots: checkedSlotsArray, server: checkedServerArray}}).then(() => {
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

  private flipClassBasedOffFighterType(value: boolean, fighterType: String){
    this.classCheckbox.filter(v => v.fighterType === fighterType).forEach(v => v.checked = value);
  }

  private flipCLassBasedOffArmorType(value: boolean, armorType: String){
    this.classCheckbox.filter(v => v.armorType === armorType).forEach(v => v.checked = value);
  }

}
