import { Component  } from '@angular/core';

import {
  FormGroup
} from "@angular/forms";
export class User {
  public email!: string;
  public password!: string;
}

@Component({
  selector: 'app-m3-b21-loginscreen',
  templateUrl: './m3-b21-loginscreen.component.html',
  styleUrls: ['./m3-b21-loginscreen.component.css'],
})
export class M3B21LoginscreenComponent {
  UserModel = new User();

  myform!: FormGroup;

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      this.myform.reset();
    }
  }
}
