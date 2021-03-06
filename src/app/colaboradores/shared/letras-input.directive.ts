import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[LetrasInput]'
})
export class LetrasInputDirective {

  constructor(private el: ElementRef) { }

  @Input() LettersInput: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent>event;
    if (this.LettersInput) {
      if (
        // Previne: Ctrl+A
        ((e.keyCode === 65 || e.keyCode === 97) && (e.ctrlKey || e.metaKey)) ||
        // Previne: Ctrl+C
        ((e.keyCode === 67 || e.keyCode === 99) && (e.ctrlKey || e.metaKey)) ||
        // Previne: Ctrl+V
        ((e.keyCode === 86 || e.keyCode === 118) && (e.ctrlKey || e.metaKey)) ||
        // Previne: Ctrl+X
        ((e.keyCode === 88 || e.keyCode === 120) && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
      }
    }

    // se for letra retorna maiúscula retorna, se for letra minúscula retorna
    if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode >= 97 && e.keyCode <= 122)) {
      return;
    } else if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 32  || e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 13) {
      return;
    } else { // se não for nada acima previne o retorno
      e.preventDefault();
    }
  }
}
