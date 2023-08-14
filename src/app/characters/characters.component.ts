import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {CharacterService} from "../service/character-service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AddCharacterComponent} from "./add-character/add-character.component";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{
  characters: Character[] = []

  constructor(private dialogRef: MatDialog, private characterService: CharacterService) {
  }

  addCharacter(){
    this.dialogRef.open(AddCharacterComponent)
  }
  ngOnInit(): void {
    this.characterService.getCharacter().subscribe(data => this.characters = data);
  }

  getAllCharacters(): void {
    this.characterService.getCharacter().subscribe(data => this.characters = data);
  }

}
