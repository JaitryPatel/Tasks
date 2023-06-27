import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { datamodel } from './model';
import { Validation } from '../validation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  submitted = false;
  form!: FormGroup;
  public data: any | datamodel[];
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
      fname: ['',Validators.required, Validators.minLength(2),],
      lname: ['', Validators.required, Validators.minLength(2),],
      email: ['', Validators.required,Validators.email,],
      department: ['', Validators.required],
      address: ['', Validators.required],
      contactnumber: ['', Validators.required],
      description: ['', Validators.required],
      status : ['', Validators.required],
      password: ['', Validators.required,Validators.minLength(8),Validators.maxLength(20),],
      confirmpassword: ['', Validators.required],
      // {
        validators: [Validation.match('password', 'confirmPassword')]
      // }
    
    }
    )
    this.getemployee();
  }
  get f(): { [key : string]: AbstractControl}
  {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if(this.form.invalid)
    {
      return;
    }

    console.log(JSON.stringify(this.form.value, null , 2));
  }
  addemployee(data: datamodel) {
    // console.log(data);
    // debugger
    this.api.addemployee(data).subscribe((res => {
      this.form.reset();
    }))

  }
  getemployee() {
    // debugger
    this.api.getemployee().subscribe(res => {
      this.data = res;
    })
  }
  deleteemployee(id:number){
    this.api.deleteemployee(id).subscribe((res => {
      this.data = res;
    }))
  }
  updateemployee(data: datamodel, id: number){
    this.api.updateemployee(data, id).subscribe((res =>{
      this.data =res;
    }))
  }
}

