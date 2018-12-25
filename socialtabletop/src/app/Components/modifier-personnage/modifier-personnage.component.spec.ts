import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPersonnageComponent } from './modifier-personnage.component';

describe('ModifierPersonnageComponent', () => {
  let component: ModifierPersonnageComponent;
  let fixture: ComponentFixture<ModifierPersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
