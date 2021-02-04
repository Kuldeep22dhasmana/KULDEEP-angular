import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KULDEEP';
  data=
   [
     {
       name:'goli',
       age: 43,
       email:'rty@gmail.com'
     },
     {
      name:'suchi',
      age: 22,
      email:'qwe@gmail.com'
    },
    {
      name:'kaju',
      age: 16,
      email:'gbn@gmail.com'
    },
    {
      name:'bheem',
      age: 50,
      email:'cxz@gmail.com'
    }
  ]
}
