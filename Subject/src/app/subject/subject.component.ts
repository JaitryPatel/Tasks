import { Component } from '@angular/core';
import { DesignUtilityService } from '../service/design/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  // public userName : any;
  userName: string = 'Jaitry';

 constructor(private designUtility :DesignUtilityService){
  this.designUtility.userName.subscribe(res =>{
    this.userName = res;
  })
 }
}
