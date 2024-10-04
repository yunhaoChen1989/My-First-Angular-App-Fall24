import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from "../share/User";
import {users} from '../mockData/userData';
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private userList:User[] = users;
  constructor() { }
  getStudents(): Observable<User[]> {
    return of (users);
  }

  getStudentById(id:number):Observable<User|undefined>{
    const student = this.userList.find(stu=>stu.id===id);
    return of(student);
  }
}
