import { Component, Input, forwardRef } from '@angular/core';
import { Step } from '../../interfaces/step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss',
  providers: [{ provide: Step, useExisting: forwardRef(() => StepComponent) }],
})
export class StepComponent implements Step {
  @Input() label!: string;
}
