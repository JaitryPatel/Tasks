import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './employee/list/list.component';
import { UpdateComponent } from './employee/update/update.component';

const routes: Routes = [
  {path:"", redirectTo:"list", pathMatch:"full"},
  {path:"update", component: UpdateComponent},
  {path:"list", component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
