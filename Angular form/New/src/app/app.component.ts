import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New';
   
get f() {
  return this.registration.controls;
}

  constructor(private fb:FormBuilder) { }
  
  registration=this.fb.group({
    firstname: [''],
    lastname:[''],
    email:[''],
    password:['']
  })

onsubmit() {
  console.log('Form submitted');
  console.log('f',this.f)
}

}
