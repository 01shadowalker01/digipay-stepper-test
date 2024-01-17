import { Directive, HostBinding, Inject } from '@angular/core';
import { Stepper } from '../interfaces/stepper';

@Directive({
  selector: '[appStepperNext]',
  host: {
    '(click)': 'stepper.next()',
  },
})
export class StepperNextDirective {
  constructor(@Inject(Stepper) public stepper: Stepper) {}

  @HostBinding('class') get classes() {
    return {
      'opacity-50': this.stepper.isValid(),
      'cursor-not-allowed': this.stepper.isValid(),
    };
  }
}
