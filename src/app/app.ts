import { Component } from '@angular/core';
import { BudgetEntry } from './models/budget-entry.interface';


@Component({
  selector: 'app-root',

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  budgetEntries: BudgetEntry[] = [];
}
