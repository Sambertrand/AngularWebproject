import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauJoueurComponent } from './nouveau-joueur.component';

describe('NouveauJoueurComponent', () => {
  let component: NouveauJoueurComponent;
  let fixture: ComponentFixture<NouveauJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
