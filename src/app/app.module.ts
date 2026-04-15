import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {UserlistComponent} from './userlist/userlist.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterarmorslottableComponent} from './characterarmorslottable/characterarmorslottable.component';
import {Epic15trackerComponent} from './epic15tracker/epic15tracker.component';
import {Tier5QuestTrackerComponent} from './tier5-quest-tracker/tier5-quest-tracker.component';
import {AddCharacterComponent} from './characters/add-character/add-character.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ImportComponent} from './import/import.component';
import {AuthInterceptor} from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    CharactersComponent,
    CharacterarmorslottableComponent,
    Epic15trackerComponent,
    Tier5QuestTrackerComponent,
    AddCharacterComponent,
    LoginComponent,
    RegisterComponent,
    ImportComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
