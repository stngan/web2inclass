import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLoginForm } from '../models/userLoginForm';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  UserLoginFormModel = new UserLoginForm("stngan", "123456");
  u = new UserLoginForm();

  errFlag: any
  validateCourse(value: any){
    if(value == 'none') {
      this.errFlag=true;
    }
    else {

      this.errFlag=false;
    }
  }

  onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log('Name:' + userForm.controls['name'].value);

  }
}
