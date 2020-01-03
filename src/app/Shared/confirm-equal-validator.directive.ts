import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive(
    {
        selector:'[appConfirmEqualValidator]',
        providers:[{
            provide:NG_VALIDATORS,
            useExisting:ConfoirmEqualValidatorDirective,
            multi:true
        }]
    }
)

export class ConfoirmEqualValidatorDirective implements Validator
{
  
validate(passwordGroup:AbstractControl):{[key:string]:any}| null
{
  const passwordField=passwordGroup.get('password');
  
  const confirmPasswordField=passwordGroup.get('confirmPassword');

  if(passwordField && confirmPasswordField.value && passwordField.value !==confirmPasswordField.value)
  {
      return {'notEqual':true}
  }
  return null;
}


}