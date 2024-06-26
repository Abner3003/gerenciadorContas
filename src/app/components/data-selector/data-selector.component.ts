import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.scss']
})
export class DataSelectorComponent {
  foods: Food[] = [
    {value: '1', viewValue: 'Janeiro'},
    {value: '2', viewValue: 'Fevereiro'},
  ];
}


