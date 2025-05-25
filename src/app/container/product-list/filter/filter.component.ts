import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductListComponent } from '../product-list.component';
import { PRODUCTS } from '../product-list.data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>()

  selectedFilterRadioButton: string = 'All';

  onSelectedFilterRadioButtonChanged(){
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
    console.log('radio button pressed')
  }
}
