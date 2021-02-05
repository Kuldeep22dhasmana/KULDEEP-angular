import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KULDEEP';
  color="orange";
  err=false;
  updateColor(){
    this.color="blue"
  }
}
