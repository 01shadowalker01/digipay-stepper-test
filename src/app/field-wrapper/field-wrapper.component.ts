import {
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  Input,
  Renderer2,
  TemplateRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormControlStatus } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ToErrorMessagesPipe } from '../pipes/to-error-messages.pipe';

@Component({
  selector: 'app-field-wrapper',
  standalone: true,
  imports: [ToErrorMessagesPipe],
  templateUrl: './field-wrapper.component.html',
  styleUrl: './field-wrapper.component.scss',
})
export class FieldWrapperComponent {
  @Input() fieldControl!: AbstractControl | null;
  @Input() tempRef!: HTMLElement;
  @ContentChild('formControlRef')
  formControlRef!: ElementRef<any>;

  constructor(private destroyRef: DestroyRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.fieldControl?.statusChanges
      .pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.handleValidityClasses(value);
      });
  }

  handleValidityClasses(value: FormControlStatus) {
    if (value === 'INVALID') {
      this.tempRef?.classList.add('border', 'border-red-500');
    } else if (value === 'VALID') {
      this.renderer.removeClass(this.tempRef, 'border-red-500');
    }
  }
}
