import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BooksService} from '../books.service';
import {ActivatedRoute} from '@angular/router';
import {AppComponent, Book} from '../app.component';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  sub: any;
    constructor(
      private router: ActivatedRoute,
      private bookserv: BooksService,
      private http: HttpClient,
    ) {}
  id: number;
  book$ !: Book;
  url: string = this.bookserv.apuURL;

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      this.id = params.id;
    });
    this.getBook().subscribe(book => this.book$ = book);
  }

  getBook(): Observable<Book> {
    return this.http.get<Book>(this.url + '/' + this.id);
  }

  onExitChange() {
    window.scrollTo(0, 420 );
  }
}
