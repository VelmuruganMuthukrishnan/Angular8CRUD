import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Router, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { createComponent } from '@angular/compiler/src/core';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './Shared/select-required-validator.directive';
import { ConfoirmEqualValidatorDirective } from './Shared/confirm-equal-validator.directive';
import {EmployeeService} from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';

const appRoutes:Routes=[
  {path:'List',component:ListEmployeesComponent},
  {path:'Create',component:CreateEmployeeComponent},
  {path:'',redirectTo:'./List',pathMatch:'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfoirmEqualValidatorDirective,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,

    BsDatepickerModule.forRoot(),
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
