import { Component } from '@angular/core';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoFormComponent],
  template: '<app-user-info-form/>',
})
export class AppComponent {}
