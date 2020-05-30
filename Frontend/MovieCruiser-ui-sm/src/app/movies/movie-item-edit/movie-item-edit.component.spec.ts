import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemEditComponent } from './movie-item-edit.component';

describe('MovieItemEditComponent', () => {
  let component: MovieItemEditComponent;
  let fixture: ComponentFixture<MovieItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
