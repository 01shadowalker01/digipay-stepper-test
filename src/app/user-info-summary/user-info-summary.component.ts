import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContactInfo, PersonalInfo } from '../user-info-form/user-info';

@Component({
  selector: 'app-user-info-summary',
  standalone: true,
  imports: [],
  templateUrl: './user-info-summary.component.html',
  styleUrl: './user-info-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoSummaryComponent {
  @Input() personalInfo!: PersonalInfo;
  @Input() documentImage!: File | null;
  @Input() contactInfo!: ContactInfo;
}
