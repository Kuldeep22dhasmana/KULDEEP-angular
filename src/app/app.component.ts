import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KULDEEP';
  currentval = ""
  getVal(event:any)
  {
    var val = event.target.value 
    console.log(val)
    this.currentval=val
  }
}
