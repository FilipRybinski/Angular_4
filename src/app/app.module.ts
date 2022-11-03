import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { PrintTitleDirective } from './print-title.directive';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,StudentsComponent, PrintTitleDirective, AddstudentComponent, ViewstudentComponent, DeletestudentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
