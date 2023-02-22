import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epic15trackerComponent } from './epic15tracker.component';

describe('Epic15trackerComponent', () => {
  let component: Epic15trackerComponent;
  let fixture: ComponentFixture<Epic15trackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Epic15trackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Epic15trackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
