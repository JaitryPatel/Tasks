import { NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ShortenPipe } from './shorten.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directive/highlight/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ShortenPipe,
    SearchFilterPipe,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
