import { Component, OnInit } from '@angular/core';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
constructor(private serv: ServiceExampleService){ }
public cmp1Array:any=[];
ngOnInit(): void {
  this.cmp1Array=this.serv.getDistricts();
  console.log(this.cmp1Array);
}
}