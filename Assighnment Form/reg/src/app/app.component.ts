import { Component } from '@angular/core';
import { FormBuilder,FormArray, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reg';
 

  constructor (private fb:FormBuilder) { }




  get f() { 
    return this.register.controls; 
  }


  submit=false
  get alternativeEmails(){
    return this.register.get('alternativeEmails') as FormArray
  }


register=this.fb.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required], 
  phone:['',[Validators.required,Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]], 
  email:['',[Validators.required,Validators.email]],
  address:['',Validators.required],
  temporary:['',Validators.required],
  about:['',Validators.required],
alternativeEmails:this.fb.array([])
})
 
addalternativeEmail() {
  console.log('alternativeEmails',this.alternativeEmails)
  this.alternativeEmails.push(this.fb.control(''))
  console.log(this.fb.control(''))
}

onsubmit(values:any){
  console.log(values.value)
  this.submit=true
  console.log('clicked')
  

}
//to check checkbox is true or false,when its true and show the result in temporary address
fieldsChange(values:any):void {
  console.log(values.currentTarget.checked);
  this.register.controls['temporary'].setValue(this.register.controls['address'].value);
}

}
