import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  citySearched: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.citySearched);
  }
}
