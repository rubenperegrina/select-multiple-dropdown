import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatOption, MatOptionSelectionChange } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Observable, startWith, map } from 'rxjs';

interface Topping {
  name: string;
  id: string;
}

@Component({
  selector: 'app-multi-select2',
  templateUrl: './multi-select2.component.html',
  styleUrls: ['./multi-select2.component.scss']
})
export class MultiSelect2Component {
  toppings = new FormControl<Topping[]>([]);
  filteredToppings!: Observable<Topping[]>;
  searchCtrl = new FormControl('');
  toppingList: Topping[] = [
    { name: 'Extra cheese', id: '1001' },
    { name: 'Mushroom', id: '1002' },
    { name: 'Onion', id: '1003' },
    { name: 'Pepperoni', id: '1004' },
    { name: 'Sausage', id: '1005' },
    { name: 'Tomato', id: '1006' }
  ];

  ngOnInit(): void {
    this.filteredToppings = this.searchCtrl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '', this.toppingList))
    );
  }

  private _filter(value: string, options: Topping[]): Topping[] {
    const filterValue = value.toLowerCase();
    return options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  selected(e: MatSelect): 'some' | 'all' | undefined {
    if (e.options == null || e.options.length === 0) {
      return undefined;
    } else if (e._selectionModel.selected.length === e.options.length) {
      return 'all';
    } else if (
      e._selectionModel.selected.length > 0 &&
      e._selectionModel.selected.length < e.options.length
    ) {
      return 'some';
    } else {
      return undefined;
    }
  }

  toggleSelection(e: MatSelect): void {
    let values: Topping[] = this.toppings.value || ([] as Topping[]);
    e.options.forEach((item: MatOption) => {
      if (this.selected(e) !== 'all' && !values.includes(item.value)) {
        values.push(item.value);
      } else if (this.selected(e) === 'all' && values?.includes(item.value)) {
        values = values.filter((value) => value !== item.value);
      }
    });
    this.toppings?.setValue(values);
    console.log("🚀 ~ file: multi-select2.component.ts:70 ~ MultiSelect2Component ~ toggleSelection ~ this.toppings:", this.toppings.value)
  }

  onSelectionChange(a: MatOptionSelectionChange): void {
    let values: Topping[] = this.toppings?.value || ([] as Topping[]);
    if (a.isUserInput) {
      if (a.source.selected && !values.includes(a.source.value)) {
        values.push(a.source.value);
      } else if (!a.source.selected && values.includes(a.source.value)) {
        values = values.filter((value) => value !== a.source.value);
      }
      this.toppings?.setValue(values);
      console.log("🚀 ~ file: multi-select2.component.ts:82 ~ MultiSelect2Component ~ onSelectionChange ~ this.toppings:", this.toppings.value)
    }
  }

  onKeydown(e: KeyboardEvent, i: HTMLInputElement) {
    i.onkeydown?.(e);
    e.stopPropagation();
  }
}