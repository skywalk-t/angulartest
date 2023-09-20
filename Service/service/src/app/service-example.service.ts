import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceExampleService {

  constructor() { }
  public array = [
    { id: 1, name: 'Alapuzha' },
    { id: 2, name: 'Pathanamthitta' },
    { id: 3, name: 'kollam' },
    { id: 4, name: 'Idukki' },
    { id: 5, name: 'Thrissur' },
    { id: 6, name: 'Palakad' },
    { id: 7, name: 'Kozhikode' },
    { id: 8, name: 'Thiruvanandapuram' },
    { id: 9, name: 'Malapuram' },
    { id: 10, name: 'Kottayam' },
    { id: 11, name: 'Wayanad' },

  ]
  getDistricts() {
    return <any>(this.array)
  }
}
