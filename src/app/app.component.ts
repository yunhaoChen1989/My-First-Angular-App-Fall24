import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentItemComponent} from "./content-item/content-item.component";

interface IContent{
  id:number,
  imageUrl:string,
  body:string,
  type:string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentItemComponent],
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
}
