import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {User} from "../share/User";
import {NgForOf} from "@angular/common";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  userList?:User[];/*= [
    {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
    {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
    {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
    {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin: true}
  ];*/
  constructor(private studentService: StudentService) {

  }
  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next:(data:User[])=>this.userList = data,
      error:err=>console.error("Error fetching Students", err),
      complete:() => console.log("Student data fetch complete!")
    })
  }
}
