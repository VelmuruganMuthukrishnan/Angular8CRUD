import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  
  employees: Employee[];
  filterdEmployees:Employee[];
  serachTerm: string;
  employeeToDisplay: Employee;
  dataFromChild: Employee;
  private _searchTerm:string;
  private arrayIndex = 1;
  get searchTerm1():string{
    return this._searchTerm;
  }
  set searchTerm1(value:string)
  {
    this._searchTerm=value;
    this.filterdEmployees=this.filterEmployees(value);
  }
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(empList=>this.employees=empList);
    this.employeeToDisplay = this.employees[0];
    this.filterdEmployees=this.employees;
  }
  handleNotify(evenData: Employee) {
    this.dataFromChild = evenData;
  }
  nextEmployee(): void {
    if (this.arrayIndex <= 2) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    }
    else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }

  }

  onClick(employeeId: number) {
    this._router.navigate(['employees/', employeeId]);
  }
  changeEmployeeName()
  {
    //const newEmployeeArray:Employee[]=Object.assign([], this.employees);
  this.employees[0].name='Dushyant';
  this.filterdEmployees=this.filterEmployees(this.searchTerm1);
  //  this.employees=newEmployeeArray;
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
}
