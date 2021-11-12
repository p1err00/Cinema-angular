import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmModalComponent } from './film-modal.component';

describe('FilmModalComponent', () => {
  let component: FilmModalComponent;
  let fixture: ComponentFixture<FilmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
