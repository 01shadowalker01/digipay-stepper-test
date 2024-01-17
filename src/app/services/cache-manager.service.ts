import { Injectable } from '@angular/core';
import { UserInfo } from '../user-info-form/components/user-info-form/user-info';

const STEP_INDEX_KEY = '$STEP_INDEX_KEY$';
const FORM_VALUES_KEY = '$FORM_VALUES_KEY$';

@Injectable({
  providedIn: 'root',
})
export class CacheManagerService {
  getState() {
    return {
      index: this.getCachedStepIndex(),
      formValues: this.getCachedFormValues(),
    };
  }

  private getCachedStepIndex(): number {
    const cachedIndex: number = Number(localStorage.getItem(STEP_INDEX_KEY));
    if (Number.isNaN(cachedIndex)) return 0;

    return cachedIndex;
  }

  private getCachedFormValues(): UserInfo | null {
    const cacheValue = localStorage.getItem(FORM_VALUES_KEY);
    if (!cacheValue) return null;

    return JSON.parse(cacheValue) as UserInfo;
  }

  setCurrentState(index: number, userInfo: UserInfo) {
    localStorage.setItem(STEP_INDEX_KEY, index.toString());
    localStorage.setItem(FORM_VALUES_KEY, JSON.stringify(userInfo));
  }
}
