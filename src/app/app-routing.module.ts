import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserlistComponent} from "./userlist/userlist.component";
import {CharactersComponent} from "./characters/characters.component";
import {CharacterarmorslottableComponent} from "./characterarmorslottable/characterarmorslottable.component";
import {Epic15trackerComponent} from "./epic15tracker/epic15tracker.component";
import {Tier5QuestTrackerComponent} from "./tier5-quest-tracker/tier5-quest-tracker.component";

const routes: Routes = [
  { path: 'users', component: UserlistComponent },
  { path: 'character-armor', component: CharacterarmorslottableComponent},
  { path: 'character-armor?*', component: CharacterarmorslottableComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'epic-1-5', component: Epic15trackerComponent },
  { path: 'tier-5', component: Tier5QuestTrackerComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
