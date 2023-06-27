import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { EmployeeRoutingModule } from './employee-routing.module';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
// import { FormGroup, FormControl } from '@angular/forms';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    ListComponent,
    // EmployeeRoutingModule,
   
    // FormControl
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // FormGroup
    
  ],
  exports: [
    // FormsModule,
    ListComponent,
    // UpdateComponent
  ],

})
export class EmployeeModule { }
