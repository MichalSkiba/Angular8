import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Book} from '../app.component';
import {BooksService} from '../books.service';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books$: Book[];
  filter: string;
  page = 1;
  content: string;

  constructor(private router: Router, private bookService: BooksService, private userService: UserService) { }

  ngOnInit() {
    this.bookService.getBook().subscribe(book => this.books$ = book);
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }

  onPageChange(page: number) {
    this.page = page;
    window.scrollTo(0, 420 );
  }

}
