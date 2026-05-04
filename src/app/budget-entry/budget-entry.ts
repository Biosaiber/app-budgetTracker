import { Component, Input } from '@angular/core';
import { BudgetEntry } from '../models/budget-entry.interface';

@Component({
  selector: 'app-budget-entry',
  imports: [],
  templateUrl: './budget-entry.html',
  styleUrl: './budget-entry.css',
})
export class BudgetEntryComponent {
  @Input() entry: BudgetEntry = {id: 0, description: "", amount: 0};
}
