import { TemplateRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export abstract class Step {
  label!: string;
  stepControl!: AbstractControl | null;
  content: TemplateRef<any> | null = null;

  abstract isValid(): boolean;
}
