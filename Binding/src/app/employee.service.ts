import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url=' http://localhost:3000'
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url + '/Customer');
  }

  addUser(fname: string, lname: string, email: string, phoneNumber: string, designation: number, city: number, floor: number, column : number, seat : number, modeofWork : number){
    debugger
    const requestBody = {
      // id: Math.floor(Math.random() * 90 + 10),           
      fname : fname,
      lname : lname,
      email : email,
      phoneNumber : phoneNumber,
      designation : designation,
      city : city,
      floor : floor,
      column : column,
      seat : seat,
      modeofWork : modeofWork
    }
    return this.http.post(this.url + 'Customer', requestBody);
  }
}
