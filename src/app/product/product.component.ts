import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BooksService} from '../_services/books.service';
import {ActivatedRoute} from '@angular/router';
import {AppComponent, Book} from '../app.component';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../_services/user.service';
import {TokenStorageService} from '../_services/token-storage.service';

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
      private tokenStorageService: TokenStorageService,
    ) {}
  id: number;
  book$ !: Book;
  url: string = this.bookserv.apuURL;
  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];
  username: string;

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      this.id = params.id;
    });
    this.getBook().subscribe(book => this.book$ = book);

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  getBook(): Observable<Book> {
    return this.http.get<Book>(this.url + '/' + this.id);
  }

  onExitChange() {
    window.scrollTo(0, 420 );
  }
}
