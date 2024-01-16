import { Directive, Inject } from '@angular/core';
import { Stepper } from '../interfaces/stepper';

@Directive({
  selector: '[appStepperNext]',
  host: {
    '(click)': 'stepper.next()',
  },
})
export class StepperNextDirective {
  constructor(@Inject(Stepper) public stepper: Stepper) {}
}
