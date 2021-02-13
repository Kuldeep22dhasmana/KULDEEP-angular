import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KULDEEP';
  users = [
    {
      name: 'peter',
      age: 22,
      address: 'dehradun'
    },
    {
      name: 'goldy',
      age: 20,
      address:"delhi" 
    },
    {
      name: 'king',
      age: 45,
      address: "haridwar"
    },
    {
      name: 'oscar',
      age:2,
      address:"lucknow" 
    }
  ]
}


