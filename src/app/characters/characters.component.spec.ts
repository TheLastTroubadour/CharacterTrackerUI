import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { CharactersComponent } from './characters.component';
import { CharacterService } from '../service/character-service';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let mockCharacterService: jasmine.SpyObj<CharacterService>;

  beforeEach(async () => {
    mockCharacterService = jasmine.createSpyObj('CharacterService', { getCharacter: of([]) });

    await TestBed.configureTestingModule({
      imports: [CommonModule, MatDialogModule],
      declarations: [CharactersComponent],
      providers: [
        { provide: CharacterService, useValue: mockCharacterService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load characters on init', () => {
    expect(mockCharacterService.getCharacter).toHaveBeenCalled();
    expect(component.characters$).toBeTruthy();
  });

  it('should show empty state when no characters returned', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No characters found.');
  });
});
