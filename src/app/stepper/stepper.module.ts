import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepComponent } from './components/step/step.component';
import { StepperNextDirective } from './directives/stepper-next.directive';
import { StepperPreviousDirective } from './directives/stepper-previous.directive';

@NgModule({
  declarations: [
    StepperComponent,
    StepComponent,
    StepperNextDirective,
    StepperPreviousDirective,
  ],
  imports: [CommonModule],
  exports: [
    StepperComponent,
    StepComponent,
    StepperNextDirective,
    StepperPreviousDirective,
  ],
})
export class StepperModule {}
