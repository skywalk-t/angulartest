import { Component } from '@angular/core';
import { FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
get alternativeEmails() {
  return this.registration.get('alternativeEmails') as FormArray
}

addalternativeEmail(){
  console.log('alternativeEmails',this.alternativeEmails)
  this.alternativeEmails.push(this.fb.control(''))
  console.log(this.fb.control(''))
}

  title = 'formz';
  constructor(private fb:FormBuilder) { }
registration = this.fb.group({
  email:['Chinchu'],
  alternativeEmails:this.fb.array([])
})

onSubmit(values:any){
console.log(values.value)
}
}
