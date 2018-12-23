import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurDisplayOneComponent } from './joueur-display-one.component';

describe('JoueurDisplayOneComponent', () => {
  let component: JoueurDisplayOneComponent;
  let fixture: ComponentFixture<JoueurDisplayOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoueurDisplayOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurDisplayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
