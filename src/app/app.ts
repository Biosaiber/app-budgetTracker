import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators'
import { BudgetEntry } from './models/budget-entry.interface';

const budgetEntriesData: BudgetEntry[] = [
  { id: 1, description: "Groceries", amount: 420 },
  { id: 2, description: "Rent", amount: 690 },
  { id: 3, description: "Kids", amount: 500 },
  { id: 4, description: "Phone", amount: 32 },
  { id: 5, description: "Gym", amount: 45 }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit, OnDestroy {
  budgetEntries: BudgetEntry[] = [];
  budgetSubscription?: Subscription;

  ngOnInit() {
    this.budgetSubscription = this.simulateDataRetrieval().subscribe({
      next: (data) => this.budgetEntries.push(data)
    })
  }
  ngOnDestroy() {
    this.budgetSubscription?.unsubscribe();
  }

  simulateDataRetrieval() {
    return from(budgetEntriesData).pipe(delay(2000))
  }
    
}
