import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
  userName: string = 'Jaitry';

  constructor(private designUtility :DesignUtilityService){
   this.designUtility.userName.subscribe(res =>{
     this.userName = res;
   })
  }
}
