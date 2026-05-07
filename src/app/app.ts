import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators'
import { BudgetEntry } from './models/budget-entry.interface';
import { BudgetEntryComponent } from './budget-entry/budget-entry';

const budgetEntriesData: BudgetEntry[] = [
  { id: 1, description: "Groceries", amount: 420 },
  { id: 2, description: "Rent", amount: 690 },
  { id: 3, description: "Kids", amount: 500 },
  { id: 4, description: "Phone", amount: 32 },
  { id: 5, description: "Gym", amount: 45 }
]

@Component({
  selector: 'app-root',
  imports: [BudgetEntryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit, OnDestroy {
  budgetEntries: BudgetEntry[] = [];
  budgetSubscription?: Subscription;
  status: string = "Fetching Data...";

  ngOnInit() {
    this.budgetSubscription = this.simulateDataRetrieval().subscribe({
      next: (data) => this.budgetEntries.push(data),
      complete: () => this.status = "Application Loaded"
    })
  }
  deleteEntry(entryId: number) {
    this.simulateDeleteEntry(entryId).subscribe({
      next: (data) => {
        this.budgetEntries = data;
        this.status = "Entry deleted.";
      },
      error: () => this.status = "Error deleting entry."
    })
  }


  simulateDataRetrieval() {
    return from(budgetEntriesData).pipe(delay(2000))
  }
  simulateDeleteEntry(entryId: number) {
      const updatedEntries = this.budgetEntries.filter(
      entry => entry.id !== entryId
    )
    return of(updatedEntries)
  }

  ngOnDestroy() {
    this.budgetSubscription?.unsubscribe();
  }
}
