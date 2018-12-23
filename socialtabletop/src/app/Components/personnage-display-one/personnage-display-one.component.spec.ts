import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageDisplayOneComponent } from './personnage-display-one.component';

describe('PersonnageDisplayOneComponent', () => {
  let component: PersonnageDisplayOneComponent;
  let fixture: ComponentFixture<PersonnageDisplayOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnageDisplayOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnageDisplayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
