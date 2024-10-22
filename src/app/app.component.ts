import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ContentItemComponent} from "./content-item/content-item.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

interface IContent{
  id:number,
  imageUrl:string,
  body:string,
  type:string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentItemComponent, RouterLink, RouterLinkActive, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string='';
  individualContentItem: IContent;
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
}
