import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { UserProfileRequest, UserProfileResponse } from './Models/userprofile';
// import {OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true,
})
export class AppComponent {
  title = 'binding';
  public name  = "Jaitry";
  public Customer : any ;

  // isOpen = false;

  // constructor (private employeeService : EmployeeService){
  //     this.employeeService.getUsers().subscribe((data : UserProfileRequest) : UserProfileResponse =>{
  //       console.log(data);
  //     })
  //   }

  
}
