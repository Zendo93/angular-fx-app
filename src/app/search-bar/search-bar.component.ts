import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Store} from "@ngrx/store";
import {setSearchTerm} from "../state/search.actions";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchTermEvent = new EventEmitter<string>();
  searchTermControl = new FormControl("");

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.searchTermControl.valueChanges.subscribe((searchTerm: string) => this.store.dispatch(setSearchTerm({searchTerm})));
  }
}
