import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Book} from '../app.component';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books$: Book[];
  filter: string;
  page = 1;

  constructor(private router: Router, private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBook().subscribe(book => this.books$ = book);
  }

  onPageChange(page: number) {
    this.page = page;
    window.scrollTo(0, 420 );
  }

}
