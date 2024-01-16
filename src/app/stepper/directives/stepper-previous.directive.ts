import { Directive, Inject } from '@angular/core';
import { Stepper } from '../interfaces/stepper';

@Directive({
  selector: '[appStepperPrevious]',
  host: {
    '(click)': 'stepper.previous()',
  },
})
export class StepperPreviousDirective {
  constructor(@Inject(Stepper) public stepper: Stepper) {}
}
