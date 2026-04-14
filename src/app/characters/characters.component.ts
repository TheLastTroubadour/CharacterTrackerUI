import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {CharacterService} from "../service/character-service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AddCharacterComponent} from "./add-character/add-character.component";
import {Observable, catchError, of} from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{
  characters$: Observable<Character[]> = new Observable();
  error: string | null = null;

  constructor(private dialogRef: MatDialog, private characterService: CharacterService) {
  }

  addCharacter(){
    this.dialogRef.open(AddCharacterComponent).afterClosed().subscribe(saved => {
      if (saved) {
        this.characters$ = this.loadCharacters();
      }
    });
  }

  ngOnInit(): void {
    this.characters$ = this.loadCharacters();
  }

  private loadCharacters(): Observable<Character[]> {
    this.error = null;
    return this.characterService.getCharacter().pipe(
      catchError(() => {
        this.error = 'Failed to load characters.';
        return of([]);
      })
    );
  }

}
