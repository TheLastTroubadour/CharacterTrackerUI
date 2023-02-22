import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { CharactersComponent } from './characters/characters.component';
import { CharacterarmorslottableComponent } from './characterarmorslottable/characterarmorslottable.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { Epic15trackerComponent } from './epic15tracker/epic15tracker.component';
import { Tier5QuestTrackerComponent } from './tier5-quest-tracker/tier5-quest-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    CharactersComponent,
    CharacterarmorslottableComponent,
    Epic15trackerComponent,
    Tier5QuestTrackerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
