import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {CharacterService} from "../service/character-service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{
  characters: Character[] = []

  constructor(private characterService: CharacterService) {
  }
  ngOnInit(): void {
    this.characterService.getUsers().subscribe(data => this.characters = data);
  }

  getAllCharacters(): void {
    this.characterService.getUsers().subscribe(data => this.characters = data);
  }

}
