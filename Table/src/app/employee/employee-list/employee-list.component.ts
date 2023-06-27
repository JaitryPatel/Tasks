import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  @Input() tableheader: any;
  @Input() employee: any;
  
  searchText:string="";
  
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  deleteRow(item: any){
    this.delete.emit(item)
  }
 
  constructor() {

  }
  
  ngOnInit(): void {

  }
}
