import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntry } from './budget-entry';

describe('BudgetEntry', () => {
  let component: BudgetEntry;
  let fixture: ComponentFixture<BudgetEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
