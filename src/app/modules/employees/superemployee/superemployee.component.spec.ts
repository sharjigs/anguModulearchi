import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperemployeeComponent } from './superemployee.component';

describe('SuperemployeeComponent', () => {
  let component: SuperemployeeComponent;
  let fixture: ComponentFixture<SuperemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
