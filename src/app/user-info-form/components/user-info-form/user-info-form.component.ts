import { Component, Renderer2 } from '@angular/core';
import { StepperModule } from '../../../stepper/stepper.module';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserInfoSummaryComponent } from '../user-info-summary/user-info-summary.component';
import { validateNationalCode } from './validators';
import { JsonPipe } from '@angular/common';
import { FieldWrapperComponent } from '../../../field-wrapper/field-wrapper.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-user-info-form',
  standalone: true,
  imports: [
    StepperModule,
    ReactiveFormsModule,
    UserInfoSummaryComponent,
    JsonPipe,
    FieldWrapperComponent,
  ],
  templateUrl: './user-info-form.component.html',
  styleUrl: './user-info-form.component.scss',
})
export class UserInfoFormComponent {
  personalInfoForm!: FormGroup;
  documentImageFormControl!: FormControl;
  contactInfoForm!: FormGroup;
  imagePreviewSrc: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userInfoService: UserInfoService
  ) {
    this.buildForms();
  }

  buildForms() {
    this.personalInfoForm = this.formBuilder.nonNullable.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalCode: ['', [Validators.required, validateNationalCode]],
    });

    this.documentImageFormControl = this.formBuilder.nonNullable.control(
      null,
      Validators.required
    );

    this.contactInfoForm = this.formBuilder.group({
      province: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSelect(event: Event) {
    const { files } = event?.target as HTMLInputElement;
    if (!files) return;

    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreviewSrc = reader.result?.toString() || '';
    };
    reader.readAsDataURL(file);
  }

  onStepperIndexChange() {}

  onSubmit() {
    this.userInfoService.submitUserInfo({
      personalInfo: this.personalInfoForm.value,
      documentImage: this.documentImageFormControl.value,
      contactInfo: this.contactInfoForm.value,
    });
  }
}
