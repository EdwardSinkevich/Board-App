import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  public searchText: string;

  constructor() { }

  ngOnInit() {
  }

  public clearSearchField() {
    this.searchText = '';
    this.onSearch();
  }

  public onSearch() {
    this.searchEvent.emit(this.searchText);
  }
}
