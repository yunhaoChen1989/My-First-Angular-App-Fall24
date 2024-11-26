import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StudentService} from "../services/student.service";
import {NgForOf} from "@angular/common";
import {User} from "../share/User";


interface IContent{
  id:number,
  imageUrl:string,
  body:string,
  type:string
}

@Component({
  selector: 'app-content-item',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './content-item.component.html',
  standalone: true,
  styleUrl: './content-item.component.css'
})
export class ContentItemComponent implements OnInit{
  @Input() contentItem?:IContent;
  userName:string="";
  users:User[]=[];
  constructor(private studs:StudentService) {
    //this constructor is primarily used for dependency injection now

  }

  ngOnInit(): void {
    //This lifecycle hook is a good place to fetch and init our data
    //this.users=this.studs.getStudents();
    this.studs.getStudents().subscribe({
      next: (data: User[]) => this.users = data,
      error:err => console.error("Error fetching Students",
        err),
      complete:() => console.log("Student data fetch complete!")
    })
  }
}
