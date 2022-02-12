import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [MessageService]
})
export class HomePageComponent implements OnInit {

  text: string;
  results: string[];
  names: string[];
  selectedName: string;
  filteredNames: string[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  data =
    {
      "Aron Jang": "Hermann Park",
      "John Doe": "Terry Hershey Park",
      "Alex Jang": "Waterwall Park",
      "Rose Lee": "Waterwall Park",
      "Jimmy Jang": "Buffalo Bayou Park",
      "Derry Jang": "Eastern Glades Park"
    };

  search(event) {
    this.selectedName = "";
    if (this.names == undefined) {
      this.names = Object.entries(this.data).map(([k, v]) => k)
    }
    this.filteredNames = this.names.filter(x => x.toUpperCase().includes(event.query.toUpperCase()));
    if (this.filteredNames.length == 0) {
      this.messageService.add({ severity: 'warn', summary: `Unable to ${event.query}'s table`, detail: 'Please check for typos' });
    }
  }

  select(event) {
    this.selectedName = event
  }


}
