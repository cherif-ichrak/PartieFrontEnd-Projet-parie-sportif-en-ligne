import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasInfoComponent } from './temas-info.component';

describe('TemasInfoComponent', () => {
  let component: TemasInfoComponent;
  let fixture: ComponentFixture<TemasInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
