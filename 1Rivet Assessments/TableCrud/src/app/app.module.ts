import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
// import { NgForm } from '@angular/forms';
// import { UpdateComponent } from './employee/update/update.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // EmployeeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // UpdateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
