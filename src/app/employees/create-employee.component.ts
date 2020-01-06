import { Component, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.models';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  // dateofbirth:Date=new Date(2020,0,3);

@ViewChild('employeeForm',{static:true}) public createEmployeeform :NgForm;

  datePickerCnfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,

    photopPath: null
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'CSE' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'ECE' }
  ];
  gender = 'male';

  constructor(private _employeeService: EmployeeService, private _router: Router) {
    this.datePickerCnfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers:false,
        // minDate:new Date(2020,0,1),
        //maxDate:new Date(2020,11,31),
        dateInputFormat: 'DD/MM/YYYY'

      }
    );

  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
  }

  saveEmployee(): void {
    const newEmployee:Employee = Object.assign({},this.employee);
    this._employeeService.save(newEmployee);
   this.createEmployeeform.reset();
    this._router.navigate(['List']);
  }

}
