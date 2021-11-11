import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchTermEvent = new EventEmitter<string>();
  searchTermControl = new FormControl("");

  ngOnInit(): void {
    this.searchTermControl.valueChanges.subscribe((searchTerm: string) => this.searchTermEvent.emit(searchTerm));
  }
}
