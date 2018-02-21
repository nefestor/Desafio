import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[NumerosInput]'
})
export class NumerosInputDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.innerHTML 
  }

  @HostListener('keydown')

  onkeydown() {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, modelCtrl) {

      modelCtrl.$parsers.push(function (inputValue) {
        var transformedInput = inputValue ? inputValue.replace(/[^\d.-]/g, '') : null;

        if (transformedInput != inputValue) {
          modelCtrl.$setViewValue(transformedInput);
          modelCtrl.$render();
        }

        return transformedInput;
      });
    }
  };
  }
}
