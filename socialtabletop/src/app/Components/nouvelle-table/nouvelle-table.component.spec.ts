import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleTableComponent } from './nouvelle-table.component';

describe('NouvelleTableComponent', () => {
  let component: NouvelleTableComponent;
  let fixture: ComponentFixture<NouvelleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
