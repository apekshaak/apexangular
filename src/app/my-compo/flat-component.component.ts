import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-component',
  template: `
    <p>
      <button>flat-component really Works! </button>
    </p>
  `,
  styles: []
})
export class FlatComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
