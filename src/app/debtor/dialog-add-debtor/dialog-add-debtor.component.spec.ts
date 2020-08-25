import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDebtorComponent } from './dialog-add-debtor.component';

describe('DialogAddDebtorComponent', () => {
  let component: DialogAddDebtorComponent;
  let fixture: ComponentFixture<DialogAddDebtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddDebtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddDebtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
