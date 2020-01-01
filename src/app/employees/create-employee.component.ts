import { Component, OnInit, } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Department} from '../models/department.models';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
departments:Department[]=[
  {id: 1, name:'Help Desk'},
  {id :2,name:'CSE'},
  {id :3,name:'IT'},
  {id:4 ,name:'ECE'}
];
gender='male';

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm:NgForm):void
  {
    console.log(empForm.value);
  }

}
