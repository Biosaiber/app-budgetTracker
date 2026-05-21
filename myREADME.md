# 🧠 Angular Budget Tracker · Core Concepts Summary

---

# 1. `@Input()` · Parent posiela dáta childovi

Predstav si firmu.

```
AppComponent = riaditeľ
BudgetEntryComponent = zamestnanec
```

Riaditeľ pošle zamestnancovi papiere:

```typescript
@Input() entry: BudgetEntry
```

Parent:

```html
<app-budget-entry [entry]="entry"></app-budget-entry>
```

Child:

```typescript
@Input() entry: BudgetEntry
```

Čo sa deje?

```
Parent
↓ pošle dáta
Child
```

Príklad:

```
AppComponentbudgetEntries
↓
BudgetEntryComponent entry
↓
BudgetEntryEditor entry
```

🔥 Dôležité:

Input vytvára:

```
jednosmerný tok dát
```

Parent → Child

Nie naopak.

---

# 2. `@Output()` · Child pošle event parentovi

Teraz zamestnanec zavolá riaditeľovi.

```
"Šéf, klikol som Delete."
```

Child:

```typescript
@Output()deleteEntry = new EventEmitter<number>();
```

Klik:

```typescript
delete() {
  this.deleteEntry.emit(this.entry.id)
}
```

Parent:

```html
(deleteEntry)="deleteEntry($event)"
```

Flow:

```
click
↓
child emit()
↓
parent zachytí
↓
parent spraví logiku
```

🔥 Dôležité:

Output neposiela dáta stále.

Posiela:

```
udalosť
```

---

# 3. `$event`

`$event` je obsah:

```typescript
emit(...)
```

Keď:

```typescript
emit(5)
```

Parent dostane:

```typescript
$event = 5
```

Keď:

```typescript
emit(this.entry.id)
```

Parent dostane:

```
ID budget položky
```

Nie mágia.

Len Angular názov pre:

```
čo child poslal
```

---

# 4. Referencie objektov 🔥 (jedna z NAJDÔLEŽITEJŠÍCH vecí)

Máš:

```typescript
const person = {
  name:"Samuel"
}
```

Potom:

```typescript
const secondPerson = person
```

Vznikol nový objekt?

❌ NIE.

Vznikla referencia.

Obaja ukazujú na:

```
TEN ISTÝ objekt v pamäti
```

Pamäť:

```
Object
name:"Samuel"
↑         ↑
person secondPerson
```

Keď:

```typescript
secondPerson.name="Hanna"
```

Potom:

```typescript
person.name
```

bude:

```
Hanna
```

PREČO?

Lebo neexistujú dva objekty.

Existuje jeden.

---

# 5. Prečo Angular editor okamžite mení parent

Ty máš:

```
App
↓
BudgetEntry
↓
BudgetEntryEditor
```

A všade ide:

```typescript
entry
```

Nie kópia.

Referencia.

Editor:

```html
<input [(ngModel)]="entry.description">
```

Keď user píše:

```
Groceries
↓
Food
```

Editor zmení:

```typescript
entry.description
```

A parent automaticky vidí:

```typescript
entry.description
```

PREČO?

Ten istý objekt.

🔥 Zlatá veta:

```
Angular nerobí mágiu.
Pracuješ s tým istým objektom.
```

---

# 6. `ngModel`

Bez:

```typescript
FormsModule
```

Angular nevie:

```html
[(ngModel)]
```

Import:

```typescript
imports:[FormsModule]
```

Potom:

```html
<input [(ngModel)]="entry.description">
```

Angular spraví:

```
UI
↔
Property
```

Obe strany sa synchronizujú.

Píše user:

```
Input
↓
Class property
```

Zmení property:

```
Class property
↓
Input
```

PREČO sa volá:

```
two-way binding
```

---

# 7. ViewChild

Predstav si:

```
BudgetEntryComponent
↓
BudgetEntryEditorComponent
```

Parent potrebuje:

```
"Resetni fields."
```

Použije:

```typescript
@ViewChild(BudgetEntryEditorComponent)
editor!: BudgetEntryEditorComponent
```

Potom:

```typescript
this.editor.resetEntry()
```

🔥 View znamená:

```
čo komponent vytvoril sám
```

Príklad:

```html
<app-budget-entry-editor>
```

patrí do VIEW.

---

# 8. ContentChild

Máš:

Parent:

```html
<app-budget-entry>
  <button #projectedButton>
</app-budget-entry>
```

Child:

```html
<ng-content>
```

Angular:

```
vezme parent HTML
↓
vloží ho do child template
```

Potom:

```typescript
@ContentChild("projectedButton")
```

child nájde button.

🔥 Content znamená:

```
HTML vložené parentom
```

Nie vlastné HTML child komponentu.

---

# 9. `ng-content`

Predstav si komponent:

```html
<div class="card">
  <ng-content></ng-content>
</div>
```

Parent:

```html
<app-card>
  Hello
</app-card>
```

Výsledok:

```html
<div class="card">
  Hello
</div>
```

🔥 ng-content je:

```
slot
```

Miesto kam parent vloží vlastný obsah.

---

# 10. Lifecycle Hooks

Angular nespraví všetko naraz.

Ide:

```
constructor
↓
ngOnInit
↓
Angular vytvorí view
↓
Angular vloží ng-content
↓
ngAfterViewInit
↓
ngAfterContentInit
```

---

## `ngOnInit()`

Používaš:

- API loading
- initial values
- subscriptions

Príklad:

```typescript
ngOnInit() {
 this.loadData()
}
```

---

## `ngAfterViewInit()`

Používaš:

```typescript
@ViewChild()
```

PREČO?

Lebo view musí existovať.

Predtým:

```typescript
this.editor
```

ešte neexistuje.

---

## `ngAfterContentInit()`

Používaš:

```typescript
@ContentChild()
```

PREČO?

Lebo Angular musí:

```html
<ng-content>
```

najprv vložiť.

Predtým button ešte neexistuje.

---

# 11. View vs Content 🔥🔥🔥

Najdôležitejšia veta.

VIEW:

```
čo komponent vytvoril sám
```

CONTENT:

```
čo parent vložil do komponentu
```

Príklady:

VIEW:

```html
<app-budget-entry-editor>
```

CONTENT:

```html
<button #projectedButton>
```

---

# 12. Angular CSS Encapsulation

Každý component CSS:

```
štýluje len svoj template
```

Preto:

```css
button{}
```

v:

```
budget-entry.component.css
```

neštýloval projected button.

PREČO?

Projected button patrí parentovi.

🔥 Preto:

```
styles.css
```

globálne

```
component.css
```

lokálne

---

# 13. Finálny mentálny model projektu

```
AppComponent
│
├── drží hlavné dáta
├── Observable
├── delete logic
│
├── BudgetOverview
│     └── overview table
│
└── BudgetEntry
      │
      ├── delete button
      ├── ViewChild
      ├── ContentChild
      ├── ng-content
      │
      └── BudgetEntryEditor
             ├── ngModel
             ├── resetEntry()
             └── field editing
```

---

# 🔥 Absolútna zlatá veta Budget Tracker projektu

```
Input posiela dáta.

Output posiela udalosti.

ViewChild ovláda child.

ContentChild pracuje s parent HTML.

ngModel synchronizuje UI a property.

Referencie objektov spôsobujú okamžité zmeny všade.

Lifecycle hooks existujú preto, lebo Angular skladá komponenty postupne.
```
