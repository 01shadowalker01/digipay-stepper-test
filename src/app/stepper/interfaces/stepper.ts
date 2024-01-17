import { EventEmitter } from '@angular/core';

export abstract class Stepper {
  showStepNumbers: boolean = true;
  currentIndex!: number;
  indexChanged!: EventEmitter<number>;

  abstract next(): void;
  abstract previous(): void;
  abstract isValid(): boolean;
}
