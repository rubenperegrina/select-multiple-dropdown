import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select1',
  templateUrl: './multi-select1.component.html',
  styleUrls: ['./multi-select1.component.scss']
})
export class MultiSelect1Component {
  providers = new FormControl();
  allProviders: any[] = [
    { name: "Device 1001", id: 1001 },
    { name: "Device 1002", id: 1002 },
    { name: "Device 1003", id: 1003 },
    { name: "Device 1004", id: 1004 },
    { name: "Device 1005", id: 1005 },
    { name: "Device 1006", id: 1006 },
    { name: "Device 1007", id: 1007 },
    { name: "Device 1008", id: 1008 },
    { name: "Device 1009", id: 1009 },
    { name: "Device 1010", id: 1010 },
    { name: "Device 1011", id: 1011 },
    { name: "Device 1012", id: 1012 }
  ];
  filteredProviders: any[] = this.allProviders;

  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredProviders = this.allProviders.filter(({ name }) => {
      const nameSelected = name.toLowerCase();
      return nameSelected.includes(searchInput);
    });
  }

  onOpenChange(searchInput: any) {
    searchInput.value = "";
    this.filteredProviders = this.allProviders;
  }
}
