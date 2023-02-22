import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterarmorslottableComponent } from './characterarmorslottable.component';

describe('CharacterarmorslottableComponent', () => {
  let component: CharacterarmorslottableComponent;
  let fixture: ComponentFixture<CharacterarmorslottableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterarmorslottableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterarmorslottableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
