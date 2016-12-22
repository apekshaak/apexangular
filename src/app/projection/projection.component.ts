import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent {

  private myData: string;

  constructor() { 
    this.myData = 'Hello Codekul';
  }
}
