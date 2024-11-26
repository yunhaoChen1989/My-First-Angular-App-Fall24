import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ContentItemComponent} from "./content-item/content-item.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe, JsonPipe, KeyValuePipe,
  LowerCasePipe,
  NgForOf,
  NgIf, NgSwitch, NgSwitchCase,
  PercentPipe, SlicePipe,
  UpperCasePipe
} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {TodoServiceService} from "./services/todo-service.service";
import {CustomPipePipe} from "../pipes/custom-pipe.pipe";
import {HoverHighLightDirective} from "../directives/hover-high-light.directive";
import {DisableButtonDirective} from "../directives/disable-button.directive";
import {TextColorDirective} from "../directives/text-color.directive";
import {MatToolbar} from "@angular/material/toolbar";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

interface IContent{
  id:number,
  imageUrl:string,
  body:string,
  type:string
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentItemComponent, RouterLink, RouterLinkActive, FormsModule, NgIf, ReactiveFormsModule, NgForOf, DatePipe, DecimalPipe, PercentPipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, SlicePipe, JsonPipe, KeyValuePipe, CustomPipePipe, NgSwitch, NgSwitchCase, HoverHighLightDirective, DisableButtonDirective, TextColorDirective, MatToolbar, MatFormField, MatInput, MatLabel],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title:string='';
  individualContentItem: IContent;
  customerForm!: FormGroup;
  countryList = [{countryName:'USA'},{countryName:'CN'},{countryName:'Canada'},{countryName:'India'}];
  markList = [80,60,99,45];
  marks:number=10;
  todo:any = null;
  serialNo:number=98.334545;
  today_date:Date=new Date();
  percent:number=0.55;
  price=2345345.2345;
  words:string='sdfasdfasdfFFFFF';
  numberArray=[4,5,6,7,3,4,5];
  userObject = {uName:'stephen', age:17,employed:true, city:'Windsor'};

  constructor(private todoService:TodoServiceService){
    this.todoService.getDataById().subscribe(data=>{this.todo=data;     console.log(this.todo)});

    this.todoService.putData({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }).subscribe(data=>console.log('put',data));
    this.todoService.postData({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    })
    this.todoService.deleteData(1).subscribe(data=>console.log('delete',data));
    this.individualContentItem = {
              id: 1,
              imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
              body: 'This is the body of the content....',
              type: 'news'
    };

  }
  user = {
    name:'',
    email:'',
  }

  onSubmit(form:any){
    if(form.valid){
      console.log('Form submitted successfully', this.user)
    }else{
      console.log('Form is invalid')
    }
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      "lastName" : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'gender' : new FormControl('female'),
      'isMarried': new FormControl(null, Validators.required),
      'address': new FormGroup({
        'country': new FormControl(null, Validators.required),
        'city' : new FormControl(null, Validators.required),
        'street' : new FormControl(null, Validators.required),
        'pincode' : new FormControl(null,Validators.required),
      })
    })
    this.customerForm.setValue({
      firstName:'yunhao',
      lastName: 'chen',
      email:'w0847446@myscc.ca',
      gender:'male',
      isMarried:true,
      address: {
        country: 'Canada',
        city:'Windsor',
        street:'kennedy',
        pincode:'234234'
      }
    })

    this.customerForm.patchValue({
      firstName:'Y',
      gender:'female',
    })
  }
  onSubmitActive(){
    if(true){
      console.log('Form submitted successfully', this.customerForm)
    }else{
      console.log('Form is invalid')
    }
  }
}
