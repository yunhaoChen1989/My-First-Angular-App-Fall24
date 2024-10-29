import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ContentItemComponent} from "./content-item/content-item.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";


interface IContent{
  id:number,
  imageUrl:string,
  body:string,
  type:string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentItemComponent, RouterLink, RouterLinkActive, FormsModule, NgIf, ReactiveFormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title:string='';
  individualContentItem: IContent;
  customerForm!: FormGroup;
  countryList = [{countryName:'USA'},{countryName:'CN'},{countryName:'Canada'},{countryName:'India'}]
  constructor(){
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
