import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
   tableheader = [
    {
      "id": "Id",
      "name": "Name",
      "department": "Department",
      "age": "Age",
      "salary": "Salary",
      "country": "Country",
      "date":"Date"

    }
  ]
 employee = [
    {
      "id": 1,
      "name": "Jaitry Patel",
      "department": "Frontend",
      "age": 21,
      "salary": "10,00,000",
      "country": "USA",
      "date":new Date()
    },
    {
      "id": 2,
      "name": "Om Patel",
      "department": "QA",
      "age": 15,
      "salary": "10,00,000",
      "country": "Ahmedavad",
      "date":new Date()
    },
    {
      "id": 3,
      "name": "Jayanti Patel",
      "department": "Frontend",
      "age": 60,
      "salary": "10,00,000",
      "country": "Manali",
      "date":new Date()
    },
    {
      "id": 4,
      "name": "Damyanti Patel",
      "department": ".net",
      "age": 49,
      "salary": "10,00,000",
      "country": "Maldivas",
      "date":new Date()
    },
    {
      "id": 5,
      "name": "Jemi Patel",
      "department": "BA",
      "age": 24,
      "salary": "10,00,000",
      "country": "India",
      "date":new Date()
    },
    {"id": 6,
      "name": "Khushi Patel",
      "department": "Frontend",
      "age": 20,
      "salary": "10,00,000",
      "country": "Valsad",
      "date":new Date()
    },
    {"id": 7,
    "name": "Jeel Patel",
    "department": "QA",
    "age": 18,
    "salary": "10,00,000",
    "country": "Canada",
    "date":new Date()
  },
  ]

  onDeleteRow(item: any) {
    console.log(this.employee.splice(this.employee.indexOf(item), 1));
  }
}
