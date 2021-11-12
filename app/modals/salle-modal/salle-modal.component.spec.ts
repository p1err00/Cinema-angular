import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleModalComponent } from './salle-modal.component';

describe('SalleModalComponent', () => {
  let component: SalleModalComponent;
  let fixture: ComponentFixture<SalleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
