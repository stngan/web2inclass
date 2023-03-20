import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name:string = 'abc';

  constructor(private fb:FormBuilder) {

  }

  infoUser = this.fb.group({
    email: ["", Validators.required, Validators.email],
    password: [""]
  })
  get f() {
    return this.infoUser.controls
  }

  ngOnInit(): void {

  }
  onSubmit() {
    alert('show form')
  }
}
