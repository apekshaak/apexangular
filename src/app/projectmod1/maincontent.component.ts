import { Component, Input } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent {

  @Input() private inMenu : Menu;
}
