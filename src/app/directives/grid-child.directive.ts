import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGridChild]'
})
export class GridChildDirective {

  constructor(public elementRef: ElementRef) {}

  public index: number;
  public innerControl: boolean;

  public returnControl() {}

  public focus() {
    this.elementRef.nativeElement.focus();
    this.elementRef.nativeElement.style.background = 'red';
  }

  public navigateTo() {
    this.elementRef.nativeElement.style.background = 'green';
  }

  public test() {
    console.log(`Directive with ref: ${this.elementRef} was called`);
  }

}
