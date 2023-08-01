import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder) {}
  submit=false

get f() {
  return this.register.controls;
}

  register= this.fb.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  gender:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  phone:['',[Validators.required,Validators.pattern]]
  
  
  })
  
onsubmit() {
  console.log('clicked');
  console.log('f',this.f);
  this.submit=true
}

}
