import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
interface User{
  id: number, firstName: string, lastName: string, department: string, isAdmin: boolean
}
export class StudentService {

  constructor() { }
  getStudents(): Observable<User[]> {
    users:User[]=      [{id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
      {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
      {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin: true}
  ];
    return of user;

  }
}
