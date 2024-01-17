import { Injectable, inject } from '@angular/core';
import { BASE_URL_TOKEN } from '../../tokens';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../components/user-info-form/user-info';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private baseUrl: string = inject(BASE_URL_TOKEN);
  private http = inject(HttpClient);

  uploadDoc(doc: File) {
    this.http.post(this.baseUrl + 'upload', doc);
  }

  submitUserInfo(userInfo: UserInfo) {
    this.http.post(this.baseUrl + 'user-info', userInfo);
  }

  updateUserInfo(userInfo: UserInfo) {
    this.http.post(this.baseUrl + 'user-info/:id', userInfo);
  }
}
