import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentCardComponent} from "./content-card/content-card.component";

interface IContent{
  id:number,
  imageUrl:string,
  body:string,
  type:string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
