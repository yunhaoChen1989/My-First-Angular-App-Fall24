import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Directive({
  selector: '[appDisableButton]',
  standalone: true
})
export class DisableButtonDirective implements OnInit{

  @Input() disableButton!:AbstractControl;

  constructor(private el:ElementRef) {

  }

  ngOnInit(): void {
    this.updateButtonState();
    //Need to subscribe to value changes to update the button state
    this.disableButton.valueChanges.subscribe(() => {
      this.updateButtonState();
    });
    }
  private updateButtonState(): void {
    const firstNameControl = this.disableButton.get('firstName');
    const lastNameControl = this.disableButton.get('lastName');
    const isDisabled = !firstNameControl?.value || !lastNameControl?.value;
    this.el.nativeElement.disabled = isDisabled;
  }

}
