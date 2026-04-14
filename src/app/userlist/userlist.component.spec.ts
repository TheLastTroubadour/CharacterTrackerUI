import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { UserlistComponent } from './userlist.component';
import { UserService } from '../service/user.service';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('UserService', { getUsers: of([]) });

    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [UserlistComponent],
      providers: [
        { provide: UserService, useValue: mockUserService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    expect(mockUserService.getUsers).toHaveBeenCalled();
  });

  it('should show empty state when no users returned', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No users found.');
  });
});
