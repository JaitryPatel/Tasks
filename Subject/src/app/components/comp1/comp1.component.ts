import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
  userName: string = "Jaitry";
  // uname: any | undefined;

  constructor(private designUtility :DesignUtilityService){
   this.designUtility.userName.subscribe(res =>{
     this.userName = res;
   })
  }

  onChange(uname: any){
    console.log(uname.value);
    this.designUtility.userName.next(uname.value);
  }
}
