import { Component, OnInit } from '@angular/core';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  constructor( private serv2:ServiceExampleService) { }
  public cmp2Array:any = []
  ngOnInit(): void {
    this.cmp2Array =this.serv2.getDistricts();
    console.log(this.cmp2Array)
  }

}
