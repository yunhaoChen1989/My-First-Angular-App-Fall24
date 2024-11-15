import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighLight]',
  standalone: true
})
export class HoverHighLightDirective {
  @Input() hoverHighlight: string=''
  constructor(private el:ElementRef) {
    console.log("Hover Highlight Directive");
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.hoverHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
