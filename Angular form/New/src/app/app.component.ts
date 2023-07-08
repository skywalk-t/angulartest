import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New';
  
submit=false


get f() {
  return this.registration.controls;
}

  constructor(private fb:FormBuilder) { }
  
  
  registration=this.fb.group({
    firstname: ['',Validators.required],
    lastname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
  
  ]]
  })

onsubmit() {
  console.log('Form submitted');
  console.log('f',this.f)
  this.submit=true
}

}
