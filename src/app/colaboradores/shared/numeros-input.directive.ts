import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[NumerosInput]'
})
export class NumerosInputDirective {

  constructor(private el: ElementRef) { }

  @Input() NumerosInput: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent>event;
    if (this.NumerosInput) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        ((e.keyCode === 65 || e.keyCode === 97) && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        ((e.keyCode === 67 || e.keyCode === 99) && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        ((e.keyCode === 86 || e.keyCode === 118) && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        ((e.keyCode === 88 || e.keyCode === 120) && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }
      //se for ':' retorna
      } if (e.keyCode === 59){
          return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();

    }
  }
}
