import { Component, OnInit, Input, SimpleChanges,Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
  
  @Input() employee1:Employee;

 // @Output() notify:EventEmitter<Employee>=new EventEmitter<Employee>();
  
  private _employee: Employee;
  @Input() employeeId: number;

  @Input()
  set employee(val: Employee) {
    // console.log('Previous:'+ (this._employee?this._employee.name:'Null'));
    // console.log('Current:'+ val.name);
    this._employee = val;

  }
  get employee(): Employee {
    return this._employee;
  }
  ngOnChanges(changes:SimpleChanges)
  {
    for(const propName of Object.keys(changes) )
    {
      const change=changes[propName];
      const from =JSON.stringify(change.previousValue);
      const to =JSON.stringify(change.currentValue);
      console.log(propName+'changed from'+from+'to'+to);
  //    console.log(propName);
    }
  }
  constructor() { }

  ngOnInit() {
  }
// handleClick()
// {
//   this.notify.emit(this.employee);
// }
  // {
  // ngOnChanges(changes:SimpleChanges)
  // {
  //   const previousEmployee= <Employee>changes.employee.previousValue;
  //   const currentEmployee=<Employee>changes.employee.currentValue;
  //   console.log('Previous:'+ (previousEmployee?previousEmployee.name:'Null'));
  //   console.log('Current:'+ currentEmployee.name);

  // }
  getEmployeeNameAndGender():string
  {
    return this.employee.name+''+this.employee.gender;
  }

}
