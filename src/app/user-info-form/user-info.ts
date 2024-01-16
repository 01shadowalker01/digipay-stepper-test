import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FormField } from '../types/form-field';

export interface UserInfo {
  personalInfo: PersonalInfo;
  documentImage: File | null;
  contactInfo: ContactInfo;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  nationalCode: string;
}

export interface ContactInfo {
  province: string;
  city: string;
  address: string;
}

// export type UserInfoFormField = ConvertToFormField<UserInfo>;
// export type UserInfoA = ConvertToA<UserInfo>;
// export type PersonalInfoFormField = ConvertToFormField<PersonalInfo>;
// export type PersonalInfoA = ConvertToA<PersonalInfo>;
// export type ContactInfoFormField = ConvertToFormField<ContactInfo>;

// type ConvertToFormField<T> = {
//   [P in keyof T]: FormField<T[P]>;
// };
// type ConvertToA<T> = {
//   [P in keyof T]: AbstractControl<T[P], null>;
// };
// export type ModelFormGroup<T> = FormGroup<{
//   [K in keyof T]: FormGroup<{
//     [NestedK in keyof T[K]]: FormControl<T[K][NestedK]>;
//   }>;
// }>;
