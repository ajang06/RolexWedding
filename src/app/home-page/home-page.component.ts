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
      "Whan": "Bendwood Park",
      "Eva": "Bendwood Park",
      "Jimmy H": "Bendwood Park",
      "Amy": "Bendwood Park",
      "Jamie": "Bendwood Park",
      "Vince": "Bendwood Park",
      "Michael S": "Bendwood Park",
      "Daniel P": "Buffalo Bayou Park",
      "Sandy": "Buffalo Bayou Park",
      "Crystal": "Buffalo Bayou Park",
      "Howard ": "Buffalo Bayou Park",
      "Hanna": "Buffalo Bayou Park",
      "Kim": "Buffalo Bayou Park",
      "Edward": "Buffalo Bayou Park",
      "Richard": "Buffalo Bayou Park",
      "Aron": "Discovery Green",
      "Chris": "Discovery Green",
      "Brandon": "Discovery Green",
      "David Y": "Discovery Green",
      "Michael C": "Discovery Green",
      "Harriot ": "Discovery Green",
      "Jason": "Discovery Green",
      "Max ": "Discovery Green",
      "Pastor Eric": "Eastern Glades",
      "Lynette": "Eastern Glades",
      "Jimmy J": "Eastern Glades",
      "Derry": "Eastern Glades",
      "Tiffany": "Eastern Glades",
      "Yong Gyo": "Eastern Glades",
      "Jungsook": "Eastern Glades",
      "Matthew": "Hermann Park",
      "Lindsey": "Hermann Park",
      "Ernest": "Hermann Park",
      "Isabelle": "Hermann Park",
      "Scott": "Hermann Park",
      "Anna": "Hermann Park",
      "Will": "Hermann Park",
      "Pia": "Hermann Park",
      "Alexander": "Sweetheart",
      "Rose": "Sweetheart",
      "David S": "Terry Hershey Park",
      "Brian": "Terry Hershey Park",
      "Ina": "Terry Hershey Park",
      "Kevin": "Terry Hershey Park",
      "Daniel L": "Terry Hershey Park",
      "Sarah": "Terry Hershey Park",
      "Jeffery": "Terry Hershey Park",
      "Christina Law": "Terry Hershey Park",
      "Sharon": "Waterwall Park",
      "Jimmy C": "Waterwall Park",
      "Joyce": "Waterwall Park",
      "Eugene": "Waterwall Park",
      "Christina Lee": "Waterwall Park",
      "Hongjune": "Waterwall Park",
      "Jennifer": "Waterwall Park",
      "James": "Waterwall Park",
    };

  search(event) {
    this.selectedName = "";
    if (this.names == undefined) {
      this.names = Object.entries(this.data).map(([k, v]) => k)
    }
    this.filteredNames = this.names.filter(x => x.toUpperCase().includes(event.query.toUpperCase())).sort();
    if (this.filteredNames.length == 0) {
      this.messageService.add({ severity: 'warn', summary: `Unable to ${event.query}'s table`, detail: 'Please check for typos' });
    }
  }

  select(event) {
    this.selectedName = event
  }


}
