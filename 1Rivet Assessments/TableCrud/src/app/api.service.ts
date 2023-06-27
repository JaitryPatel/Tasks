import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './employee/list/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url='http://localhost:3000'
  // constructor(private http: HttpClient) { }
  // getUsers() {
  //   return this.http.get(this.url + '/posts');
  // }

  // addemployee(name: string, email: string, city: string, pincode: number, phonenumber: number){
  //   debugger
  //   const requestBody = {
  //     id: Math.floor(Math.random() * 90 + 10),
  //     name: name,
  //     email : email,
  //     city : city,
  //     pincode: pincode,
  //     country: pincode
  //   }
  //   return this.http.post<datamodel>(" http://localhost:3000/posts", data)
  //   // return this.http.post(this.url + '/posts', requestBody);
  // }

  // removeUser(id:number){
  //   return this.http.delete(this.url + '/posts/' + id);
  // }

  constructor(private http: HttpClient) { }
  addemployee(data: datamodel) {
    // debugger
    return this.http.post<datamodel>(" http://localhost:3000/posts", data)
    // debugger
  }

  //get employee
  getemployee(){
    return this.http.get<datamodel[]>("http://localhost:3000/posts");
  }

  //delete 
  deleteemployee(id:number){
    return this.http.delete<datamodel[]>("http://localhost:3000/posts/" +id);
  }

  //Fetch
  fetchdata(id: number){
    return this.http.get<datamodel>("http://localhost:3000/posts/"+id)
  }

  //Update
  updateemployee(data: datamodel, id: number){
    return this.http.put<datamodel>("http://localhost:3000/posts/"+id, data);
  }
}


