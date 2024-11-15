import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColorDirective implements OnChanges {

  @Input() textColor:number| null=null;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
       if(changes['textColor'] && this.textColor !==null){
         this.applyTextColor(this.textColor);
       }
  }

  private applyTextColor(mark:number):void{
    let color='';
    let fontWeight = 'normal';
    if(mark < 50){
      color = 'darkred';
      fontWeight='bold';
    }else if(mark >= 50 && mark <= 59){
      color = 'lightcoral';
    }else if(mark >= 60 && mark <= 69){
      color = 'darkorange';
    }else if(mark >= 70){
      color = 'green';
    }
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', fontWeight);
  }

}
