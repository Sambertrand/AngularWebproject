import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableDisplayOneComponent } from './my-table-display-one.component';

describe('MyTableDisplayOneComponent', () => {
  let component: MyTableDisplayOneComponent;
  let fixture: ComponentFixture<MyTableDisplayOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTableDisplayOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableDisplayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
