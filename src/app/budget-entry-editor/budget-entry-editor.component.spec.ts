import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntryEditorComponent } from './budget-entry-editor.component';

describe('BudgetEntryEditorComponent', () => {
  let component: BudgetEntryEditorComponent;
  let fixture: ComponentFixture<BudgetEntryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetEntryEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
