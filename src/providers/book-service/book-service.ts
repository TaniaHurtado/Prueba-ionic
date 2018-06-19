import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookServiceProvider {

  url: string = "https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse";
  constructor(public http: HttpClient) {
    console.log('Hello BookServiceProvider Provider');
  }

}
