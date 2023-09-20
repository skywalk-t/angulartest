import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post';
  data = {
    firstname: '',
    lastname: '',
    age: null,
    salary: null
  }

  onsubmit() {
    console.log('clicked', this.data);
  }
}
