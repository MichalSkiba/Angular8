import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apuURL = 'http://192.168.10.155:8080/api';

  constructor(private http: HttpClient) { }

  getTravellers() {
    this.http.get(`http://192.168.10.155:8080/api/traveller.json`)
      .subscribe( (data) => console.log(JSON.stringify(data)));
  }

  getBook(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(this.apuURL);
  }
}
