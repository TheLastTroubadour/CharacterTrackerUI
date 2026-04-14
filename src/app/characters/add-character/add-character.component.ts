import {Component, OnInit} from '@angular/core';
import {ServerTypes} from "../../model/server-types";
import {Character} from "../../model/character";
import {FormBuilder} from "@angular/forms";
import {CharacterClasses} from "../../model/character-classes";
import {CharacterService} from "../../service/character-service";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit{

  serverTypes = Object.keys(ServerTypes).filter(v => isNaN(Number(v)));
  characterClasses = Object.entries(CharacterClasses).map(([shortName, obj]) => ({shortName, obj}));

  constructor(private fb: FormBuilder, private characterService: CharacterService) {
  }

  ngOnInit(): void {
    }

  characterForm = this.fb.group({
    name: [''],
    characterClass: [''],
    server: [''],
  })

  servers= Object.keys(ServerTypes).filter(v => isNaN(Number(v)));

  changeClass(e: any){
    this.characterForm.controls['characterClass'].setValue(e.target.value);
  }

  changeServer(e : any){
    this.characterForm.controls['server'].setValue(e.target.value);
  }

  addCharacter() {
    let character: Character = this.characterForm.value as any as Character;
    let res = this.characterService.addCharacter(character);
    console.log(res);
  }
}
