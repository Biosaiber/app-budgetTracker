# BudgetTrackerApp
## Architektúra

Táto appka je **Personal Budget Tracker**. Má uložené budget položky typu:

```typescript
id
description
amount
```

základný dátový model v `BudgetEntry` interface.

### Appka má 4 hlavné časti:

1. **AppComponent**  
  hlavný rodič, drží dáta, status, načítanie dát a mazanie položiek.
2. **BudgetOverviewComponent**  
  zobrazí prehľad všetkých položiek. Dostáva dáta cez `@Input() entries`.
3. **BudgetEntryComponent**  
  zobrazuje jednu konkrétnu položku, má tlačidlá reset/delete a komunikuje s rodičom cez `@Output()`.
4. **BudgetEntryEditorComponent**  
  upravuje jednu položku cez inputy a `ngModel`.

### Postup:

1. **interface**  
  Najprv si vytvoríme typ dát.
  
2. **app component**  
  Potom rodičovský mozog aplikácie: pole položiek, status, fake dáta.
  
3. **overview component**  
  Potom jednoduchý prehľad položiek.
  
4. **entry component**  
  Potom jedna karta položky.
  
5. **editor component**  
  Nakoniec editor vo vnútri jednej položky.