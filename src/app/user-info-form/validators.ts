import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateNationalCode(
  control: AbstractControl
): ValidationErrors | null {
  const { value: nationalCode } = control;
  if (!nationalCode) return { invalidNationalCode: true };
  if (hasNonDigitCharacter(nationalCode)) return { invalidNationalCode: true };
  if (nationalCode.length !== 10) return { invalidNationalCode: true };

  if (areAllTheSameNumber(nationalCode)) {
    return { invalidNationalCode: true };
  }

  var check = parseInt(nationalCode.charAt(9));
  let j = 10,
    sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(nationalCode.charAt(i)) * j;
    j--;
  }
  var result = sum - Math.round(sum / 11) * 11;

  if (
    (result == 0 && result == check) ||
    (result == 1 && check == 1) ||
    (result > 1 && check == 11 - result)
  )
    return null;

  return { invalidNationalCode: true };
}

function areAllTheSameNumber(value: string): boolean {
  return /^(\d)\1{9}$/.test(value);
}

function hasNonDigitCharacter(value: string): boolean {
  return /\D/.test(value);
}
