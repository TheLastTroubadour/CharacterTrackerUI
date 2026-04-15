import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserlistComponent} from './userlist/userlist.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterarmorslottableComponent} from './characterarmorslottable/characterarmorslottable.component';
import {Epic15trackerComponent} from './epic15tracker/epic15tracker.component';
import {Tier5QuestTrackerComponent} from './tier5-quest-tracker/tier5-quest-tracker.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ImportComponent} from './import/import.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UserlistComponent, canActivate: [AuthGuard]},
  {path: 'characters', component: CharactersComponent, canActivate: [AuthGuard]},
  {path: 'character-armor', component: CharacterarmorslottableComponent, canActivate: [AuthGuard]},
  {path: 'character-armor?*', component: CharacterarmorslottableComponent, canActivate: [AuthGuard]},
  {path: 'epic-1-5', component: Epic15trackerComponent, canActivate: [AuthGuard]},
  {path: 'tier-5', component: Tier5QuestTrackerComponent, canActivate: [AuthGuard]},
  {path: 'import', component: ImportComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
