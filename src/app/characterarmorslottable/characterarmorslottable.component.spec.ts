import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CharacterarmorslottableComponent } from './characterarmorslottable.component';
import { CharacterEquipArmorSlotService } from '../service/character-equip-armor-slot.service';

describe('CharacterarmorslottableComponent', () => {
  let component: CharacterarmorslottableComponent;
  let fixture: ComponentFixture<CharacterarmorslottableComponent>;
  let mockArmorService: jasmine.SpyObj<CharacterEquipArmorSlotService>;

  beforeEach(async () => {
    mockArmorService = jasmine.createSpyObj('CharacterEquipArmorSlotService', {
      getAllArmorEquipSlotsByClassAndSlot: of([]),
    });

    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, RouterTestingModule],
      declarations: [CharacterarmorslottableComponent],
      providers: [
        { provide: CharacterEquipArmorSlotService, useValue: mockArmorService },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterarmorslottableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize checkbox arrays on init', () => {
    expect(component.classCheckbox.length).toBeGreaterThan(0);
    expect(component.slotCheckBox.length).toBeGreaterThan(0);
    expect(component.serverCheckbox.length).toBeGreaterThan(0);
  });

  it('should show empty state when no armor returned', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No armor found for the selected filters.');
  });
});
