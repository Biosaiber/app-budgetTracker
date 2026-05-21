# Budget Tracker · Angular Learning Project

A training project built from scratch while learning Angular component architecture, data flow, lifecycle hooks, RxJS basics and component communication.

This project was intentionally developed step by step without copying a finished implementation. The goal was not only to make the application work, but to understand why Angular applications are structured in a specific way.

## Features

- Display budget entries
- Edit budget items using ngModel
- Delete entries
- Reset entry fields
- Responsive card layout
- Budget overview section
- Component based UI structure
- Content projection using ng-content
- Child component access with ViewChild
- Projected content access with ContentChild
- Observable based simulated data loading

## Angular concepts practiced

### Component communication
- @Input()
- @Output()
- EventEmitter
- $event

### Component architecture
- Parent → Child data flow
- Component ownership
- Smart vs presentation responsibilities
- Component styling boundaries

### Angular rendering lifecycle
- ngOnInit()
- ngAfterViewInit()
- ngAfterContentInit()

### Component interaction
- ViewChild
- ContentChild
- ng-content

### Forms
- ngModel
- FormsModule
- Two way binding

### RxJS basics
- Observable
- subscribe()
- from()
- of()
- delay()
- unsubscribe()

### TypeScript concepts practiced
- Interfaces
- Object references vs copies
- Component class responsibilities

## What I focused on while building

This project was used to intentionally practice architectural thinking:

- deciding where state belongs
- separating responsibilities between components
- understanding when to use Input vs Output
- understanding ViewChild vs ContentChild
- learning Angular style encapsulation
- understanding object references and Angular change detection

## Project structure

```

AppComponent
│
├── BudgetOverviewComponent
│
└── BudgetEntryComponent
    │
    └── BudgetEntryEditorComponent

```

## Technologies

- Angular
- TypeScript
- RxJS
- HTML
- CSS

## Running locally

```bash
npm install
ng serve
```

Open:

```
http://localhost:4200
```

## Learning note

The main goal of this project was not speed.

The goal was understanding.