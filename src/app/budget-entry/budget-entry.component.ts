import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BudgetEntry } from '../models/budget-entry.interface';
import { BudgetEntryEditorComponent } from '../budget-entry-editor/budget-entry-editor.component';

@Component({
  selector: 'app-budget-entry',
  imports: [BudgetEntryEditorComponent],
  templateUrl: './budget-entry.component.html',
  styleUrl: './budget-entry.component.css',
})
export class BudgetEntryComponent {
  @Input() entry: BudgetEntry = {id: 0, description: "", amount: 0};
  @Output() deleteEntry = new EventEmitter<number>();
  @ViewChild(BudgetEntryEditorComponent)
  editor!: BudgetEntryEditorComponent;

  delete() {
    this.deleteEntry.emit(this.entry.id);
  }
  resetEditor() {
    this.editor.resetEntry();
  }
}
