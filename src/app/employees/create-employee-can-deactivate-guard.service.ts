import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { Observable } from 'rxjs';
import { inject } from '@angular/core/testing';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>
{
canDeactivate(component:CreateEmployeeComponent): boolean{
     if(component.createEmployeeform.dirty)
     {
         return confirm('Are you sure you want  to discards your changes');
     }
     return true;
}
}