import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';
  totalProductCount = 0;
  totalProductInStock = 0;
  totalProductOutOfStock = 0;

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //Fetches the input from searchInput in HTML
  @ViewChild('searchInput')
  searchInputEl: ElementRef;

  updateSearchText(){
    console.log('Searching...')
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
