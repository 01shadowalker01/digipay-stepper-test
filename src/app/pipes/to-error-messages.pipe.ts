import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'toErrorMessages',
  standalone: true,
})
export class ToErrorMessagesPipe implements PipeTransform {
  transform(errors: ValidationErrors | null | undefined): string[] {
    if (!errors) return [];
    return Object.keys(errors).map(
      (err) => errorMessages[err] || 'ورودی نامعتبر است.'
    );
  }
}

const errorMessages: { [key: string]: string } = {
  required: 'این فیلد اجباری است.',
  invalidNationalCode: 'کد ملی معتبر نیست.',
};
