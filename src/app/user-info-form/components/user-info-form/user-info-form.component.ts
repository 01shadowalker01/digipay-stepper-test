import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { StepperModule } from '../../../stepper/stepper.module';
import {
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
import { UserInfoService } from '../../services/user-info.service';
import { CacheManagerService } from '../../../services/cache-manager.service';
import { UserInfo } from './user-info';

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
export class UserInfoFormComponent implements OnInit {
  personalInfoForm!: FormGroup;
  documentImageFormControl!: FormControl;
  contactInfoForm!: FormGroup;
  imagePreviewSrc: string = '';
  currentStepIndex = 0;

  constructor(
    private formBuilder: FormBuilder,
    private userInfoService: UserInfoService,
    private cacheManagerService: CacheManagerService
  ) {
    this.buildForms();
  }

  ngOnInit(): void {
    this.setCachedData();
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

  setCachedData() {
    const { index, formValues } = this.cacheManagerService.getState();
    this.currentStepIndex = index;

    if (!formValues) return;

    this.personalInfoForm.setValue(formValues.personalInfo);
    this.contactInfoForm.setValue(formValues.contactInfo);
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

  onSubmit() {
    this.userInfoService.submitUserInfo(this.getUserInfo());
  }

  private getUserInfo(): UserInfo {
    return {
      personalInfo: this.personalInfoForm.value,
      documentImage: this.documentImageFormControl.value,
      contactInfo: this.contactInfoForm.value,
    };
  }

  @HostListener('window:beforeunload')
  beforeUnloadHandler() {
    this.cacheManagerService.setCurrentState(
      this.currentStepIndex,
      this.getUserInfo()
    );
  }

  ngOnDestroy() {}
}
