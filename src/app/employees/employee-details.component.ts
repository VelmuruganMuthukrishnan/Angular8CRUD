import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
employee:Employee;
private _id:number;
  constructor(private _router:ActivatedRoute,private _employeeService:EmployeeService, private _route:Router) { }

  ngOnInit() {

    this._router.paramMap.subscribe(params=>{
      this._id=+params.get('id');
      this.employee=  this._employeeService.getEmployee(this._id);
    });
  
  }
 
  viewNextEmployee()
  {
    if(this._id <3)
  {
    this._id=this._id+1;
  }
  else
  {
    this._id=1;
  }

this._route.navigate(['/employees',this._id]);
  }


}
