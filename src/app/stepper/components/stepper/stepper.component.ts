import { Component, forwardRef } from '@angular/core';
import { Stepper } from '../../interfaces/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  providers: [
    { provide: Stepper, useExisting: forwardRef(() => StepperComponent) },
  ],
})
export class StepperComponent implements Stepper {
  next() {
    console.log('xxxx');
  }
  previous() {
    console.log('xxxx');
  }
}
