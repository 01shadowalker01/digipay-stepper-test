import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  forwardRef,
} from '@angular/core';
import { Stepper } from '../../interfaces/stepper';
import { Step } from '../../interfaces/step';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  providers: [
    { provide: Stepper, useExisting: forwardRef(() => StepperComponent) },
  ],
})
export class StepperComponent implements Stepper {
  @ContentChildren(Step) steps!: QueryList<Step>;

  @Input() showStepNumbers: boolean = true;
  @Input() currentIndex: number = 0;

  @Output() indexChanged = new EventEmitter<number>();

  public _currentStep!: Step | null;

  ngAfterContentInit() {
    if (this.steps) {
      this.updateCurrentStep();
    }
  }

  next() {
    if (!this._currentStep?.isValid()) return;

    this.currentIndex = Math.min(this.currentIndex + 1, this.steps.length - 1);
    this.updateCurrentStep();
  }
  previous() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.updateCurrentStep();
  }

  isValid(): boolean {
    return this._currentStep?.isValid() || false;
  }

  private updateCurrentStep() {
    this._currentStep = this.steps.get(this.currentIndex) || null;
  }
}
