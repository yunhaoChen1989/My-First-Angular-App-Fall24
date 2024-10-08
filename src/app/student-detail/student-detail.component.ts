import {Component, OnInit} from '@angular/core';
import {User} from "../share/User";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent implements OnInit{
  student: User | undefined;
  userList: User[]=[];
  currentIndex: number = 0;

  constructor(private route: ActivatedRoute,
              private studentService: StudentService,
              private router: Router) {
  }
  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.studentService.getStudents().subscribe(users=>{
        this.userList=users;
        this.currentIndex = this.userList.findIndex(u=>u.id==id);
        this.student = this.userList[this.currentIndex];
      })

    }
  }

  goBack():void{
    this.router.navigate(['students']);
  }

  goForward(): void{
    if(this.currentIndex < this.userList.length - 1){
      this.currentIndex++;
      this.router.navigate(['students',this.userList[this.currentIndex].id]);
    }
  }

  goBackward():void{
    if(this.currentIndex > 0){
      this.currentIndex--;
      this.router.navigate(['students',this.userList[this.currentIndex].id]);
    }
  }
}
