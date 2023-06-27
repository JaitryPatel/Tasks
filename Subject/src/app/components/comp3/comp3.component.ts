import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
  userName: string = 'Jaitry';

  constructor(private designUtility :DesignUtilityService){
   this.designUtility.userName.subscribe(res =>{
     this.userName = res;
   })
  }
}
