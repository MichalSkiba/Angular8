import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular8RouterBook';
  data = new Date();


  constructor() {}

  ngOnInit(): void {

  }



  metoda() {
    return this.data;
  }
}

export interface Book {

  id?: number;
  tytul?: string;
  autor?: string;
  stron?: number;
  cena?: number;
  url?: string;
  url2?: string;
}
