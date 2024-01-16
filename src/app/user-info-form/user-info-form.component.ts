import { Component } from '@angular/core';
import { StepperModule } from '../stepper/stepper.module';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-info-form',
  standalone: true,
  imports: [StepperModule, ReactiveFormsModule],
  templateUrl: './user-info-form.component.html',
  styleUrl: './user-info-form.component.scss',
})
export class UserInfoFormComponent {
  userInfoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  public get formControls(): FormGroup {
    return this.userInfoForm.controls as unknown as FormGroup;
  }

  buildForm() {
    this.userInfoForm = this.formBuilder.nonNullable.group({
      personalInfo: this.formBuilder.nonNullable.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        nationalCode: ['', Validators.required],
      }),
      documentImage: this.formBuilder.nonNullable.control(
        null,
        Validators.required
      ),
      contactInfo: this.formBuilder.group({
        province: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
      }),
    });
  }
}
