import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.models';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService
{
private listEmployees:Employee[]=[
    {
        id:1,
        name:'Vel',
        gender:'Male',
        phoneNumber:9994184681,
        contactPreference:'Email',
        email:'velmurugan.m8@gmail.com',
        dateOfBirth:new Date('05/18/1980'),
        department:'IT',
        isActive:true,
        photopPath:'assets/images/vel.jfif'
      },
      {
        id:2,
        name:'Murugan',
        gender:'Male',
        phoneNumber:9789857910,
        contactPreference:'Email',
        email:'velmurugancse80@gmail.com',
        dateOfBirth:new Date('10/18/1980'),
        department:'CSE',
        isActive:true,
        photopPath:'assets/images/download1.jfif' 
      }
];

getEmployees():Observable<Employee[]>{
    return Observable.of(this.listEmployees);
}

getEmployee(id:number):Employee{ 
  return this.listEmployees.find(e=>e.id===id);
}

save(employee:Employee){
    this.listEmployees.push(employee);
}


}
