import { Component, Input } from '@angular/core';
import { BudgetEntry } from '../models/budget-entry.interface';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-budget-entry-editor',
  imports: [FormsModule],
  templateUrl: './budget-entry-editor.component.html',
  styleUrl: './budget-entry-editor.component.css',
})
export class BudgetEntryEditorComponent {
    @Input() entry: BudgetEntry = {id: 0, description: "", amount: 0};
    status: string =  "";
    resetEntry() {
      this.entry.description = "";
      this.entry.amount = 0;
      this.status = "Fields reset."
    }
}
