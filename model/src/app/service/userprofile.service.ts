import { Injectable } from '@angular/core';
import { UserProfileRequest, UserProfileResponse } from '../Models/userprofile';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  //Userprofile url
  private url: string = environment.apiUrl;
  constructor(private _http: HttpClient) {

  }
  // send register data
  userRegister(data: UserProfileRequest): UserProfileResponse {
    const body = {
      profilePictureFileString: data.profilePictureFileString,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      designation: data.designation,
      modeOfWork: data.modeOfWork,
      city: data.city,
      floor: data.floor,
      column: data.column,
      seat: data.seat,
      workingDays: data.workingDays
    }
    return this._http.post(this.url + '/deskbook/user-profile', body);
  }

}

