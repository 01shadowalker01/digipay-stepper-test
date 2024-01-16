import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { Step } from '../../interfaces/step';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-step',
  template: '<ng-template><ng-content /></ng-template>',
  providers: [{ provide: Step, useExisting: forwardRef(() => StepComponent) }],
})
export class StepComponent implements Step {
  @Input() label!: string;
  @Input() stepControl!: AbstractControl | null;

  @ViewChild(TemplateRef, { static: true }) content: TemplateRef<any> | null =
    null;

  isValid(): boolean {
    return !!this.stepControl?.valid;
  }
}
