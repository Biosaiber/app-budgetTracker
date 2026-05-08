import { Component, Input } from '@angular/core';
import { BudgetEntry } from '../models/budget-entry.interface';

@Component({
  selector: 'app-budget-overview',
  imports: [],
  templateUrl: './budget-overview.component.html',
  styleUrl: './budget-overview.component.css',
})
export class BudgetOverviewComponent {
  @Input() entries: BudgetEntry[] = [];
}
