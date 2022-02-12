import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  text: string;
  results: string[];
  names: string[];
  selectedName: string;
  filteredNames: any;

  constructor() { }

  ngOnInit(): void {
  }

  data =
    {
      "Aron Jang": "Hermann",
      "John Doe": "Terry Hershey",
      "Alex Jang": "Waterwall",
      "Rose Lee": "Waterwall",
      "Jimmy Jang": "Buffalo Bayou",
      "Derry Jang": "Eastern Glades"
    };

  search(event) {
    console.log(event.query)
    if (this.names == undefined) {
      this.names = Object.entries(this.data).map(([k, v]) => k)
    }
    this.filteredNames = this.names.filter(x => x.toUpperCase().includes(event.query.toUpperCase()));
  }

  select(event) {
    this.selectedName = event
  }

}
