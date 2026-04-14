import {Component, OnInit} from '@angular/core';
import {CharacterEquipArmorSlotService} from "../service/character-equip-armor-slot.service";
import {CharacterEquipArmorSlot} from "../model/character-equip-armor-slot";
import {CharacterClasses} from "../model/character-classes";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, catchError, of, switchMap} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {EquipSlot} from "../model/equip-slot";
import {ServerTypes} from "../model/server-types";

@Component({
  selector: 'app-characterarmorslottable',
  templateUrl: './characterarmorslottable.component.html',
  styleUrls: ['./characterarmorslottable.component.css']
})



export class CharacterarmorslottableComponent implements OnInit {

  characterArmorSlots$: Observable<CharacterEquipArmorSlot[]> = new Observable();
  error: string | null = null;
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

    this.characterArmorSlots$ = this.route.queryParams.pipe(
      switchMap(params => {
        this.error = null;
        let httpParams = new HttpParams();
        if (params['slots'] != null) httpParams = httpParams.set('slots', params['slots']);
        if (params['server'] != null) httpParams = httpParams.set('server', params['server']);
        if (params['classes'] != null) httpParams = httpParams.set('classes', params['classes']);
        return this.equipSlotService.getAllArmorEquipSlotsByClassAndSlot(httpParams).pipe(
          catchError(() => {
            this.error = 'Failed to load armor.';
            return of([]);
          })
        );
      })
    );
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
    this.router.navigate(['/character-armor'], {relativeTo: this.route, queryParams: {classes: checkedClassesArray, slots: checkedSlotsArray, server: checkedServerArray}});
  }

  private flipClassBasedOffFighterType(value: boolean, fighterType: String){
    this.classCheckbox.filter(v => v.fighterType === fighterType).forEach(v => v.checked = value);
  }

  private flipCLassBasedOffArmorType(value: boolean, armorType: String){
    this.classCheckbox.filter(v => v.armorType === armorType).forEach(v => v.checked = value);
  }

}
