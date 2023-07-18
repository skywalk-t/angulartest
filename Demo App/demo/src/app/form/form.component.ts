import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  submit = false

  register = new FormGroup({

    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    ismarried: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required)

    })

  })

  get f() {
    return this.register.controls;

  }
  get address() {
    return this.register.controls.address.controls;

  }


  onsubmit() {
    console.log(this.register.value)
    this.submit = true
  }
}
