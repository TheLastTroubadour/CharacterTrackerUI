import {Component, OnInit} from '@angular/core';
import {ServerTypes} from "../../model/server-types";
import {FormBuilder} from "@angular/forms";
import {CharacterClasses} from "../../model/character-classes";
import {CharacterService} from "../../service/character-service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit{

  serverTypes = Object.keys(ServerTypes).filter(v => isNaN(Number(v)));
  characterClasses = Object.entries(CharacterClasses).map(([shortName, obj]) => ({shortName, obj}));

  characterForm = this.fb.group({
    name: [''],
    characterClass: [''],
    server: [''],
  });

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService,
    public dialogRef: MatDialogRef<AddCharacterComponent>
  ) {}

  ngOnInit(): void {}

  changeClass(e: any){
    this.characterForm.controls['characterClass'].setValue(e.target.value);
  }

  changeServer(e: any){
    this.characterForm.controls['server'].setValue(e.target.value);
  }

  addCharacter() {
    const { name, characterClass, server } = this.characterForm.getRawValue();
    this.characterService.addCharacter({
      name: name ?? '',
      characterClass: characterClass ?? '',
      server: server ?? '',
    }).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
