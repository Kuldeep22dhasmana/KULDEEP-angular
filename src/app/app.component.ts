import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KULDEEP';
  name='';
  age='';
  parentFunction(data:any)
  {
    console.log(data)
    this.name=data.name;
    this.age=data.age;
  }
}


