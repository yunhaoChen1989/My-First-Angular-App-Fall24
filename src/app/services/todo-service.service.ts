import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {

  constructor(private http:HttpClient) {
  }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

}
