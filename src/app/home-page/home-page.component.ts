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

  constructor() { }

  ngOnInit(): void {
  }

  data =
    {
      "Aron Jang": "Hermann",
      "John Doe": "Terry Hershey",
      "Alex Jang": "Waterwall",
      "Rose Lee": "Waterwall"
    };ß

  search(event) {
    this.names = Object.entries(this.data).map(([k, v]) => k)
  }

  select(event) {
    console.log(event)
    this.selectedName = event
  }

}
