import{Directive} from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';

@Directive(
{
selector:'[appSelectValidator]'
})
export class SelectRequiredValidatorDirective implements Validator
{
    validate(control):AbstractControl
}
