import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs";
import {User} from "../share/User";

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private url:string='https://jsonplaceholder.typicode.com/todos';


  constructor(private http:HttpClient) {
  }

  getData(){
    return this.http.get(this.url);
  }
  getDataById(id:number=1){
    return this.http.get(`api/user`);
    //return this.http.get(`${this.url}/${id}`)
  }

  putData(newData:any){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', newData);
  }

  postData(newData:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',newData);
  }

  deleteData(id:number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
