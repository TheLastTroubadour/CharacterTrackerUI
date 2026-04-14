import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { AddCharacterComponent } from './add-character.component';
import { CharacterService } from '../../service/character-service';

describe('AddCharacterComponent', () => {
  let component: AddCharacterComponent;
  let fixture: ComponentFixture<AddCharacterComponent>;
  let mockCharacterService: jasmine.SpyObj<CharacterService>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<AddCharacterComponent>>;

  beforeEach(async () => {
    mockCharacterService = jasmine.createSpyObj('CharacterService', { addCharacter: of({} as any) });
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AddCharacterComponent],
      providers: [
        { provide: CharacterService, useValue: mockCharacterService },
        { provide: MatDialogRef, useValue: mockDialogRef },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the character form with empty fields', () => {
    expect(component.characterForm.value).toEqual({ name: '', characterClass: '', server: '' });
  });

  it('should call addCharacter and close dialog on submit', () => {
    component.characterForm.setValue({ name: 'Warrior1', characterClass: 'Warrior', server: 'PEQ' });
    component.addCharacter();
    expect(mockCharacterService.addCharacter).toHaveBeenCalledWith({ name: 'Warrior1', characterClass: 'Warrior', server: 'PEQ' });
    expect(mockDialogRef.close).toHaveBeenCalledWith(true);
  });
});
