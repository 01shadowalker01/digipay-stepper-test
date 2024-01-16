import { AbstractControl, ValidationErrors } from '@angular/forms';

export type FormField<T> = (
  | T
  | ((control: AbstractControl<T, any>) => ValidationErrors | null)
)[];
