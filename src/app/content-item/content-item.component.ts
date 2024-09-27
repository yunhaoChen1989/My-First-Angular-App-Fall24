import {Component, Input} from '@angular/core';
interface IContent{
  id:number,
  imageUrl:string,
  body:string,
  type:string
}
@Component({
  selector: 'app-content-item',
  standalone: true,
  imports: [],
  templateUrl: './content-item.component.html',
  styleUrl: './content-item.component.css'
})
export class ContentItemComponent {
  @Input() contentItem?:IContent;
}
